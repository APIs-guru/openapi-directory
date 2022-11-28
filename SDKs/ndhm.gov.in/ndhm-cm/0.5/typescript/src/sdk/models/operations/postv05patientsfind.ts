import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV05PatientsFindHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostV05PatientsFindRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patientIdentificationRequest?: shared.PatientIdentificationRequest;
}


export class PostV05PatientsFindRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostV05PatientsFindHeaders;

  @SpeakeasyMetadata()
  request: PostV05PatientsFindRequests;
}


export class PostV05PatientsFindResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
