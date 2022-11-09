import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const POSTV05USERSAUTHONINIT_SERVERS = [
	"https://your-hrp-server.com",
];



export class PostV05UsersAuthOnInitHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-HIP-ID" })
  xHipId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" })
  xHiuId: string;
}


export class PostV05UsersAuthOnInitRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  patientAuthInitResponse?: shared.PatientAuthInitResponse;
}


export class PostV05UsersAuthOnInitRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  headers: PostV05UsersAuthOnInitHeaders;

  @Metadata()
  request: PostV05UsersAuthOnInitRequests;
}


export class PostV05UsersAuthOnInitResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
