import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV05HealthInformationCmOnRequestHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" })
  xHiuId: string;
}


export class PostV05HealthInformationCmOnRequestRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  hiuHealthInformationRequestResponse?: shared.HiuHealthInformationRequestResponse;
}


export class PostV05HealthInformationCmOnRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostV05HealthInformationCmOnRequestHeaders;

  @SpeakeasyMetadata()
  request: PostV05HealthInformationCmOnRequestRequests;
}


export class PostV05HealthInformationCmOnRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
