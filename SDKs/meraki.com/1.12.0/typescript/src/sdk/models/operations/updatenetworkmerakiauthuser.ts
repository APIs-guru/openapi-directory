import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkMerakiAuthUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=merakiAuthUserId" })
  merakiAuthUserId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkMerakiAuthUserRequestBodyAuthorizations extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiresAt" })
  expiresAt?: string;

  @Metadata({ data: "json, name=ssidNumber" })
  ssidNumber: number;
}


export class UpdateNetworkMerakiAuthUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizations", elemType: operations.UpdateNetworkMerakiAuthUserRequestBodyAuthorizations })
  authorizations?: UpdateNetworkMerakiAuthUserRequestBodyAuthorizations[];

  @Metadata({ data: "json, name=emailPasswordToUser" })
  emailPasswordToUser?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;
}


export class UpdateNetworkMerakiAuthUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkMerakiAuthUserPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkMerakiAuthUserRequestBody;
}


export class UpdateNetworkMerakiAuthUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkMerakiAuthUser200ApplicationJsonObject?: Map<string, any>;
}
