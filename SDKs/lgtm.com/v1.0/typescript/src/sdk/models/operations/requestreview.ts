import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestReviewPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-id" })
  projectId: number;
}


export class RequestReviewQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=base" })
  base: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback-secret" })
  callbackSecret?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback-url" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=external-id" })
  externalId: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=review-url" })
  reviewUrl?: string;
}


export class RequestReviewSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class RequestReviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestReviewPathParams;

  @SpeakeasyMetadata()
  queryParams: RequestReviewQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" })
  request: Uint8Array;

  @SpeakeasyMetadata()
  security: RequestReviewSecurity;
}


export class RequestReviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  operation?: shared.Operation;
}
