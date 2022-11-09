import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestAnalysisPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project-id" })
  projectId: number;
}


export class RequestAnalysisQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=commit" })
  commit: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string[];
}


export class RequestAnalysisSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class RequestAnalysisRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestAnalysisPathParams;

  @Metadata()
  queryParams: RequestAnalysisQueryParams;

  @Metadata()
  security: RequestAnalysisSecurity;
}


export class RequestAnalysisResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  operation?: shared.Operation;
}
