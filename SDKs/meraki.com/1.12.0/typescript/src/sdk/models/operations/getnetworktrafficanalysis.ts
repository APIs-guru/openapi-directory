import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkTrafficAnalysisPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkTrafficAnalysisRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkTrafficAnalysisPathParams;
}


export class GetNetworkTrafficAnalysisResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkTrafficAnalysis200ApplicationJsonObject?: Map<string, any>;
}
