import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkFloorPlanPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=floorPlanId" })
  floorPlanId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkFloorPlanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkFloorPlanPathParams;
}


export class GetNetworkFloorPlanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkFloorPlan200ApplicationJsonObject?: Map<string, any>;
}
