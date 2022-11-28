import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV05PatientsSmsOnNotifyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIP-ID" })
  xHipId: string;
}


export class PostV05PatientsSmsOnNotifyRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patientSmsNotifcationResponse?: shared.PatientSmsNotifcationResponse;
}


export class PostV05PatientsSmsOnNotifyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostV05PatientsSmsOnNotifyHeaders;

  @SpeakeasyMetadata()
  request: PostV05PatientsSmsOnNotifyRequests;
}


export class PostV05PatientsSmsOnNotifyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
