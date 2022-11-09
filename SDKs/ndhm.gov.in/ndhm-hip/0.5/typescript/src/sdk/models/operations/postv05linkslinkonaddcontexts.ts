import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const POSTV05LINKSLINKONADDCONTEXTS_SERVERS = [
	"https://your-hrp-server.com",
];



export class PostV05LinksLinkOnAddContextsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-HIP-ID" })
  xHipId: string;
}


export class PostV05LinksLinkOnAddContextsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  patientCareContextLinkResponse?: shared.PatientCareContextLinkResponse;
}


export class PostV05LinksLinkOnAddContextsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  headers: PostV05LinksLinkOnAddContextsHeaders;

  @Metadata()
  request: PostV05LinksLinkOnAddContextsRequests;
}


export class PostV05LinksLinkOnAddContextsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
