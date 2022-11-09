import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05LinksLinkOnInitHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostV05LinksLinkOnInitRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  patientLinkReferenceResult?: shared.PatientLinkReferenceResult;
}


export class PostV05LinksLinkOnInitRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05LinksLinkOnInitHeaders;

  @Metadata()
  request: PostV05LinksLinkOnInitRequests;
}


export class PostV05LinksLinkOnInitResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
