import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05PatientsSmsOnNotifyHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-HIP-ID" })
  xHipId: string;
}


export class PostV05PatientsSmsOnNotifyRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  patientSmsNotifcationResponse?: shared.PatientSmsNotifcationResponse;
}


export class PostV05PatientsSmsOnNotifyRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05PatientsSmsOnNotifyHeaders;

  @Metadata()
  request: PostV05PatientsSmsOnNotifyRequests;
}


export class PostV05PatientsSmsOnNotifyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
