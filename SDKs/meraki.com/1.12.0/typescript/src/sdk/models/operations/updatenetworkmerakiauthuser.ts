import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkMerakiAuthUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merakiAuthUserId" })
  merakiAuthUserId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkMerakiAuthUserRequestBodyAuthorizations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiresAt" })
  expiresAt?: string;

  @SpeakeasyMetadata({ data: "json, name=ssidNumber" })
  ssidNumber: number;
}


export class UpdateNetworkMerakiAuthUserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizations", elemType: UpdateNetworkMerakiAuthUserRequestBodyAuthorizations })
  authorizations?: UpdateNetworkMerakiAuthUserRequestBodyAuthorizations[];

  @SpeakeasyMetadata({ data: "json, name=emailPasswordToUser" })
  emailPasswordToUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;
}


export class UpdateNetworkMerakiAuthUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkMerakiAuthUserPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkMerakiAuthUserRequestBody;
}


export class UpdateNetworkMerakiAuthUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkMerakiAuthUser200ApplicationJsonObject?: Map<string, any>;
}
