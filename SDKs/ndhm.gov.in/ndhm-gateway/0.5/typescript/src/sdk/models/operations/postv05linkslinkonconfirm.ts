import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV05LinksLinkOnConfirmHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-CM-ID" })
  xCmId: string;
}


export class PostV05LinksLinkOnConfirmRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patientLinkResult?: shared.PatientLinkResult;
}


export class PostV05LinksLinkOnConfirmRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostV05LinksLinkOnConfirmHeaders;

  @SpeakeasyMetadata()
  request: PostV05LinksLinkOnConfirmRequests;
}


export class PostV05LinksLinkOnConfirmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
