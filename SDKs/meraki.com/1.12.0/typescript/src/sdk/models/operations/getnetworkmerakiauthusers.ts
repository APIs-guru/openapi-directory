import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkMerakiAuthUsersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkMerakiAuthUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkMerakiAuthUsersPathParams;
}


export class GetNetworkMerakiAuthUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkMerakiAuthUsers200ApplicationJsonObject?: Map<string, any>;
}
