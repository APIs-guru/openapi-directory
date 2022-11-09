import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05HealthInformationCmOnRequestHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" })
  xHiuId: string;
}


export class PostV05HealthInformationCmOnRequestRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  hiuHealthInformationRequestResponse?: shared.HiuHealthInformationRequestResponse;
}


export class PostV05HealthInformationCmOnRequestRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05HealthInformationCmOnRequestHeaders;

  @Metadata()
  request: PostV05HealthInformationCmOnRequestRequests;
}


export class PostV05HealthInformationCmOnRequestResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
