import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV05HealthInformationHipRequestHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIP-ID" })
  xHipId: string;
}


export class PostV05HealthInformationHipRequestRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  hiphiRequest?: shared.HiphiRequest;
}


export class PostV05HealthInformationHipRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostV05HealthInformationHipRequestHeaders;

  @SpeakeasyMetadata()
  request: PostV05HealthInformationHipRequestRequests;
}


export class PostV05HealthInformationHipRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
