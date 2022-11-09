import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAnalysisPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=analysis-id" })
  analysisId: string;
}


export class GetAnalysisSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class GetAnalysisRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAnalysisPathParams;

  @Metadata()
  security: GetAnalysisSecurity;
}


export class GetAnalysisResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  analysis?: shared.Analysis;
}
