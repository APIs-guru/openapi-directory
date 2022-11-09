import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05HealthInformationOnRequestHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostV05HealthInformationOnRequestRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  hipHealthInformationRequestAcknowledgement?: shared.HipHealthInformationRequestAcknowledgement;
}


export class PostV05HealthInformationOnRequestRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05HealthInformationOnRequestHeaders;

  @Metadata()
  request: PostV05HealthInformationOnRequestRequests;
}


export class PostV05HealthInformationOnRequestResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
