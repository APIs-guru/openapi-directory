import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV05UsersAuthOnFetchModesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIP-ID" })
  xHipId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" })
  xHiuId: string;
}


export class PostV05UsersAuthOnFetchModesRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patientAuthModeQueryResponse?: shared.PatientAuthModeQueryResponse;
}


export class PostV05UsersAuthOnFetchModesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostV05UsersAuthOnFetchModesHeaders;

  @SpeakeasyMetadata()
  request: PostV05UsersAuthOnFetchModesRequests;
}


export class PostV05UsersAuthOnFetchModesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
