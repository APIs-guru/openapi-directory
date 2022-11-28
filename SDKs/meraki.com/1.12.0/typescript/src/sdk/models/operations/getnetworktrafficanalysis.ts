import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkTrafficAnalysisPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkTrafficAnalysisRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkTrafficAnalysisPathParams;
}


export class GetNetworkTrafficAnalysisResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkTrafficAnalysis200ApplicationJsonObject?: Map<string, any>;
}
