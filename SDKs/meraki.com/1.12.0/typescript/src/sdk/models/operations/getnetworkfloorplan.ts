import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkFloorPlanPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=floorPlanId" })
  floorPlanId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkFloorPlanRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkFloorPlanPathParams;
}


export class GetNetworkFloorPlanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkFloorPlan200ApplicationJsonObject?: Map<string, any>;
}
