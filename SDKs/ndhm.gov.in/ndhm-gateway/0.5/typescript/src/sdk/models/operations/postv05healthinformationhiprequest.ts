import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05HealthInformationHipRequestHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-HIP-ID" })
  xHipId: string;
}


export class PostV05HealthInformationHipRequestRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  hiphiRequest?: shared.HiphiRequest;
}


export class PostV05HealthInformationHipRequestRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05HealthInformationHipRequestHeaders;

  @Metadata()
  request: PostV05HealthInformationHipRequestRequests;
}


export class PostV05HealthInformationHipRequestResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
