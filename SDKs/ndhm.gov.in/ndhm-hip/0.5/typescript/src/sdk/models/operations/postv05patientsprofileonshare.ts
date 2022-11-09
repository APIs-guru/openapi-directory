import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05PatientsProfileOnShareHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-CM-ID" })
  xCmId: string;
}


export class PostV05PatientsProfileOnShareRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  shareProfileResult?: shared.ShareProfileResult;
}


export class PostV05PatientsProfileOnShareRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05PatientsProfileOnShareHeaders;

  @Metadata()
  request: PostV05PatientsProfileOnShareRequests;
}


export class PostV05PatientsProfileOnShareResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
