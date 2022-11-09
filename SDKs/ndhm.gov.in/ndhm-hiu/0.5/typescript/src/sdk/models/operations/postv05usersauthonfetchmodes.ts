import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05UsersAuthOnFetchModesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-HIP-ID" })
  xHipId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" })
  xHiuId: string;
}


export class PostV05UsersAuthOnFetchModesRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  patientAuthModeQueryResponse?: shared.PatientAuthModeQueryResponse;
}


export class PostV05UsersAuthOnFetchModesRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05UsersAuthOnFetchModesHeaders;

  @Metadata()
  request: PostV05UsersAuthOnFetchModesRequests;
}


export class PostV05UsersAuthOnFetchModesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
