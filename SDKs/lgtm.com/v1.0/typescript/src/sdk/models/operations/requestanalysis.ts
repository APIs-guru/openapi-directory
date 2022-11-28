import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestAnalysisPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-id" })
  projectId: number;
}


export class RequestAnalysisQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=commit" })
  commit: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string[];
}


export class RequestAnalysisSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class RequestAnalysisRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestAnalysisPathParams;

  @SpeakeasyMetadata()
  queryParams: RequestAnalysisQueryParams;

  @SpeakeasyMetadata()
  security: RequestAnalysisSecurity;
}


export class RequestAnalysisResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  operation?: shared.Operation;
}
