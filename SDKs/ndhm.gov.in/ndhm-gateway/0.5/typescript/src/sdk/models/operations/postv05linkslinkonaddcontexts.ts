import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV05LinksLinkOnAddContextsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIP-ID" })
  xHipId: string;
}


export class PostV05LinksLinkOnAddContextsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patientCareContextLinkResponse?: shared.PatientCareContextLinkResponse;
}


export class PostV05LinksLinkOnAddContextsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostV05LinksLinkOnAddContextsHeaders;

  @SpeakeasyMetadata()
  request: PostV05LinksLinkOnAddContextsRequests;
}


export class PostV05LinksLinkOnAddContextsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
