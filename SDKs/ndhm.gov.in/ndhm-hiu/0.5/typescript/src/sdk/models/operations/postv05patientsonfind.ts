import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const POSTV05PATIENTSONFIND_SERVERS = [
	"https://dev.ndhm.gov.in/hiu",
];



export class PostV05PatientsOnFindHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostV05PatientsOnFindRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  patientIdentificationResponse?: shared.PatientIdentificationResponse;
}


export class PostV05PatientsOnFindRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  headers: PostV05PatientsOnFindHeaders;

  @Metadata()
  request: PostV05PatientsOnFindRequests;
}


export class PostV05PatientsOnFindResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
