import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV05LinksLinkAddContextsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-CM-ID" })
  xCmId: string;
}


export class PostV05LinksLinkAddContextsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patientCareContextLinkRequest?: shared.PatientCareContextLinkRequest;
}


export class PostV05LinksLinkAddContextsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostV05LinksLinkAddContextsHeaders;

  @SpeakeasyMetadata()
  request: PostV05LinksLinkAddContextsRequests;
}


export class PostV05LinksLinkAddContextsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
