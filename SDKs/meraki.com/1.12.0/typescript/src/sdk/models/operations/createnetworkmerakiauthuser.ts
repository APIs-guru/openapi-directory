import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateNetworkMerakiAuthUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum {
    Guest = "Guest"
,    EightHundredAndTwo1X = "802.1X"
,    ClientVpn = "Client VPN"
}


export class CreateNetworkMerakiAuthUserRequestBodyAuthorizations extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiresAt" })
  expiresAt?: string;

  @Metadata({ data: "json, name=ssidNumber" })
  ssidNumber?: number;
}


export class CreateNetworkMerakiAuthUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountType" })
  accountType?: CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum;

  @Metadata({ data: "json, name=authorizations", elemType: operations.CreateNetworkMerakiAuthUserRequestBodyAuthorizations })
  authorizations: CreateNetworkMerakiAuthUserRequestBodyAuthorizations[];

  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=emailPasswordToUser" })
  emailPasswordToUser?: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=password" })
  password: string;
}


export class CreateNetworkMerakiAuthUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateNetworkMerakiAuthUserPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateNetworkMerakiAuthUserRequestBody;
}


export class CreateNetworkMerakiAuthUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNetworkMerakiAuthUser201ApplicationJsonObject?: Map<string, any>;
}
