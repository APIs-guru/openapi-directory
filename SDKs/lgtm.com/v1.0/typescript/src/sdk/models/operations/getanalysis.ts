import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAnalysisPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=analysis-id" })
  analysisId: string;
}


export class GetAnalysisSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class GetAnalysisRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAnalysisPathParams;

  @SpeakeasyMetadata()
  security: GetAnalysisSecurity;
}


export class GetAnalysisResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  analysis?: shared.Analysis;
}
