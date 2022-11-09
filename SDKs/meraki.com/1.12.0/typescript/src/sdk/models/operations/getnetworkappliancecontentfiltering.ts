import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkApplianceContentFilteringPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkApplianceContentFilteringRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkApplianceContentFilteringPathParams;
}


export class GetNetworkApplianceContentFilteringResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkApplianceContentFiltering200ApplicationJsonObject?: Map<string, any>;
}
