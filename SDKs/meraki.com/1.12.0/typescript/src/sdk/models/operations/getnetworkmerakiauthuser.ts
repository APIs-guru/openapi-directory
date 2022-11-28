import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkMerakiAuthUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merakiAuthUserId" })
  merakiAuthUserId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkMerakiAuthUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkMerakiAuthUserPathParams;
}


export class GetNetworkMerakiAuthUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkMerakiAuthUser200ApplicationJsonObject?: Map<string, any>;
}
