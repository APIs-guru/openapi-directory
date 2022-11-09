import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const POSTV05HEALTHINFORMATIONTRANSFER_SERVERS = [
	"https://dev.ndhm.gov.in/hiu",
];



export class PostV05HealthInformationTransferHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostV05HealthInformationTransferRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  dataNotification?: shared.DataNotification;
}


export class PostV05HealthInformationTransferRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  headers: PostV05HealthInformationTransferHeaders;

  @Metadata()
  request: PostV05HealthInformationTransferRequests;
}


export class PostV05HealthInformationTransferResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
