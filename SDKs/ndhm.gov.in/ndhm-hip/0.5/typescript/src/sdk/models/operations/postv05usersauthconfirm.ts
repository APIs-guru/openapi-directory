import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05UsersAuthConfirmHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-CM-ID" })
  xCmId: string;
}


export class PostV05UsersAuthConfirmRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  patientAuthConfirmRequest?: shared.PatientAuthConfirmRequest;
}


export class PostV05UsersAuthConfirmRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05UsersAuthConfirmHeaders;

  @Metadata()
  request: PostV05UsersAuthConfirmRequests;
}


export class PostV05UsersAuthConfirmResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
