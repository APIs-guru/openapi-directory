import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05UsersAuthFetchModesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-CM-ID" })
  xCmId: string;
}


export class PostV05UsersAuthFetchModesRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  patientAuthModeQueryRequest?: shared.PatientAuthModeQueryRequest;
}


export class PostV05UsersAuthFetchModesRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05UsersAuthFetchModesHeaders;

  @Metadata()
  request: PostV05UsersAuthFetchModesRequests;
}


export class PostV05UsersAuthFetchModesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
