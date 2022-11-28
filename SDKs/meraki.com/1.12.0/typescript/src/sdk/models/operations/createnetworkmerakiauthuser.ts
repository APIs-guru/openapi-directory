import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNetworkMerakiAuthUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum {
    Guest = "Guest",
    EightHundredAndTwo1X = "802.1X",
    ClientVpn = "Client VPN"
}


export class CreateNetworkMerakiAuthUserRequestBodyAuthorizations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiresAt" })
  expiresAt?: string;

  @SpeakeasyMetadata({ data: "json, name=ssidNumber" })
  ssidNumber?: number;
}


export class CreateNetworkMerakiAuthUserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountType" })
  accountType?: CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=authorizations", elemType: CreateNetworkMerakiAuthUserRequestBodyAuthorizations })
  authorizations: CreateNetworkMerakiAuthUserRequestBodyAuthorizations[];

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=emailPasswordToUser" })
  emailPasswordToUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;
}


export class CreateNetworkMerakiAuthUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateNetworkMerakiAuthUserPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateNetworkMerakiAuthUserRequestBody;
}


export class CreateNetworkMerakiAuthUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNetworkMerakiAuthUser201ApplicationJsonObject?: Map<string, any>;
}
