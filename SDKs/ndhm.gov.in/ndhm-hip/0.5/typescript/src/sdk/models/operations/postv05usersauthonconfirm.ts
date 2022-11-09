import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const POSTV05USERSAUTHONCONFIRM_SERVERS = [
	"https://your-hrp-server.com",
];



export class PostV05UsersAuthOnConfirmHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-HIP-ID" })
  xHipId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" })
  xHiuId: string;
}


export class PostV05UsersAuthOnConfirmRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  patientAuthConfirmResponse?: shared.PatientAuthConfirmResponse;
}


export class PostV05UsersAuthOnConfirmRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  headers: PostV05UsersAuthOnConfirmHeaders;

  @Metadata()
  request: PostV05UsersAuthOnConfirmRequests;
}


export class PostV05UsersAuthOnConfirmResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
