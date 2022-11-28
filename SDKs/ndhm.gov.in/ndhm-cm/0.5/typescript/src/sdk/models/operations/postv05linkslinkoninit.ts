import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV05LinksLinkOnInitHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostV05LinksLinkOnInitRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patientLinkReferenceResult?: shared.PatientLinkReferenceResult;
}


export class PostV05LinksLinkOnInitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostV05LinksLinkOnInitHeaders;

  @SpeakeasyMetadata()
  request: PostV05LinksLinkOnInitRequests;
}


export class PostV05LinksLinkOnInitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
