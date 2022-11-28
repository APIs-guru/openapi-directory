import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV05HealthInformationCmRequestHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-CM-ID" })
  xCmId: string;
}


export class PostV05HealthInformationCmRequestRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  hiRequest?: shared.HiRequest;
}


export class PostV05HealthInformationCmRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostV05HealthInformationCmRequestHeaders;

  @SpeakeasyMetadata()
  request: PostV05HealthInformationCmRequestRequests;
}


export class PostV05HealthInformationCmRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
