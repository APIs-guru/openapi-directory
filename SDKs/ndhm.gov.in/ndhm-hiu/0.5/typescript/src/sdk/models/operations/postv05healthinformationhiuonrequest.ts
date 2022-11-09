import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const POSTV05HEALTHINFORMATIONHIUONREQUEST_SERVERS = [
	"https://dev.ndhm.gov.in/hiu",
];



export class PostV05HealthInformationHiuOnRequestHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" })
  xHiuId: string;
}


export class PostV05HealthInformationHiuOnRequestRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  hiuHealthInformationRequestResponse?: shared.HiuHealthInformationRequestResponse;
}


export class PostV05HealthInformationHiuOnRequestRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  headers: PostV05HealthInformationHiuOnRequestHeaders;

  @Metadata()
  request: PostV05HealthInformationHiuOnRequestRequests;
}


export class PostV05HealthInformationHiuOnRequestResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
