import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV05PatientsOnFindHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostV05PatientsOnFindRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patientIdentificationResponse?: shared.PatientIdentificationResponse;
}


export class PostV05PatientsOnFindRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostV05PatientsOnFindHeaders;

  @SpeakeasyMetadata()
  request: PostV05PatientsOnFindRequests;
}


export class PostV05PatientsOnFindResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
