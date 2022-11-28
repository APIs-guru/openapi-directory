import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV05UsersAuthFetchModesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostV05UsersAuthFetchModesRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patientAuthModeQueryRequest?: shared.PatientAuthModeQueryRequest;
}


export class PostV05UsersAuthFetchModesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostV05UsersAuthFetchModesHeaders;

  @SpeakeasyMetadata()
  request: PostV05UsersAuthFetchModesRequests;
}


export class PostV05UsersAuthFetchModesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
