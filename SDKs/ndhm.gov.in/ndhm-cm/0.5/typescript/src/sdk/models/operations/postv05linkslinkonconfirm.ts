import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05LinksLinkOnConfirmHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostV05LinksLinkOnConfirmRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  patientLinkResult?: shared.PatientLinkResult;
}


export class PostV05LinksLinkOnConfirmRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05LinksLinkOnConfirmHeaders;

  @Metadata()
  request: PostV05LinksLinkOnConfirmRequests;
}


export class PostV05LinksLinkOnConfirmResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
