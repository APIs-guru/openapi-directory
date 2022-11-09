import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05HealthInformationHipOnRequestHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-CM-ID" })
  xCmId: string;
}


export class PostV05HealthInformationHipOnRequestRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  hipHealthInformationRequestAcknowledgement?: shared.HipHealthInformationRequestAcknowledgement;
}


export class PostV05HealthInformationHipOnRequestRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05HealthInformationHipOnRequestHeaders;

  @Metadata()
  request: PostV05HealthInformationHipOnRequestRequests;
}


export class PostV05HealthInformationHipOnRequestResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
