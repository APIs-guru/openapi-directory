import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkFloorPlansPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkFloorPlansRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkFloorPlansPathParams;
}


export class GetNetworkFloorPlansResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkFloorPlans200ApplicationJsonObject?: Map<string, any>;
}
