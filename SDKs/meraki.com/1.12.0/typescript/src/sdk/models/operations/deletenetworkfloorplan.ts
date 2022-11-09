import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNetworkFloorPlanPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=floorPlanId" })
  floorPlanId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class DeleteNetworkFloorPlanRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNetworkFloorPlanPathParams;
}


export class DeleteNetworkFloorPlanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
