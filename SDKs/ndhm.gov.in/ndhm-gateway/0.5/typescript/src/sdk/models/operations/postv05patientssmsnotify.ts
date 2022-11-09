import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05PatientsSmsNotifyHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-CM-ID" })
  xCmId: string;
}


export class PostV05PatientsSmsNotifyRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  patientSmsNotifcationRequest?: shared.PatientSmsNotifcationRequest;
}


export class PostV05PatientsSmsNotifyRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05PatientsSmsNotifyHeaders;

  @Metadata()
  request: PostV05PatientsSmsNotifyRequests;
}


export class PostV05PatientsSmsNotifyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
