import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const PostV05HealthInformationHiuOnRequestServerList = [
	"https://dev.ndhm.gov.in/hiu",
] as const;


export class PostV05HealthInformationHiuOnRequestHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" })
  xHiuId: string;
}


export class PostV05HealthInformationHiuOnRequestRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  hiuHealthInformationRequestResponse?: shared.HiuHealthInformationRequestResponse;
}


export class PostV05HealthInformationHiuOnRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  headers: PostV05HealthInformationHiuOnRequestHeaders;

  @SpeakeasyMetadata()
  request: PostV05HealthInformationHiuOnRequestRequests;
}


export class PostV05HealthInformationHiuOnRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
