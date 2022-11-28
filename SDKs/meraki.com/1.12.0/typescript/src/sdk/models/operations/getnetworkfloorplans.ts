import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkFloorPlansPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkFloorPlansRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkFloorPlansPathParams;
}


export class GetNetworkFloorPlansResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkFloorPlans200ApplicationJsonObject?: Map<string, any>;
}
