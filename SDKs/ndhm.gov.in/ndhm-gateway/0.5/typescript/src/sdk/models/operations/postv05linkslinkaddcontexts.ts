import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05LinksLinkAddContextsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-CM-ID" })
  xCmId: string;
}


export class PostV05LinksLinkAddContextsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  patientCareContextLinkRequest?: shared.PatientCareContextLinkRequest;
}


export class PostV05LinksLinkAddContextsRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05LinksLinkAddContextsHeaders;

  @Metadata()
  request: PostV05LinksLinkAddContextsRequests;
}


export class PostV05LinksLinkAddContextsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
