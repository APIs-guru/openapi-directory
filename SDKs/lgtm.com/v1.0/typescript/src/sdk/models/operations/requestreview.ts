import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestReviewPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project-id" })
  projectId: number;
}


export class RequestReviewQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=base" })
  base: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback-secret" })
  callbackSecret?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback-url" })
  callbackUrl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=external-id" })
  externalId: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=review-url" })
  reviewUrl?: string;
}


export class RequestReviewSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class RequestReviewRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestReviewPathParams;

  @Metadata()
  queryParams: RequestReviewQueryParams;

  @Metadata({ data: "request, media_type=application/octet-stream" })
  request: Uint8Array;

  @Metadata()
  security: RequestReviewSecurity;
}


export class RequestReviewResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  operation?: shared.Operation;
}
