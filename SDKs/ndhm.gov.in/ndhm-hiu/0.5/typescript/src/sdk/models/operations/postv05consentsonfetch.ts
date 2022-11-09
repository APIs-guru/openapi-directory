import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const POSTV05CONSENTSONFETCH_SERVERS = [
	"https://dev.ndhm.gov.in/hiu",
];



export class PostV05ConsentsOnFetchHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" })
  xHiuId: string;
}


export class PostV05ConsentsOnFetchRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  consentArtefactResponse?: shared.ConsentArtefactResponse;
}


export class PostV05ConsentsOnFetchRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  headers: PostV05ConsentsOnFetchHeaders;

  @Metadata()
  request: PostV05ConsentsOnFetchRequests;
}


export class PostV05ConsentsOnFetchResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
