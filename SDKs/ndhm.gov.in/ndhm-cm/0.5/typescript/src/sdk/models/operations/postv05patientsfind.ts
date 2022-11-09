import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05PatientsFindHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostV05PatientsFindRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  patientIdentificationRequest?: shared.PatientIdentificationRequest;
}


export class PostV05PatientsFindRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05PatientsFindHeaders;

  @Metadata()
  request: PostV05PatientsFindRequests;
}


export class PostV05PatientsFindResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
