import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05CareContextsOnDiscoverHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-CM-ID" })
  xCmId: string;
}


export class PostV05CareContextsOnDiscoverRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  patientDiscoveryResult?: shared.PatientDiscoveryResult;
}


export class PostV05CareContextsOnDiscoverRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05CareContextsOnDiscoverHeaders;

  @Metadata()
  request: PostV05CareContextsOnDiscoverRequests;
}


export class PostV05CareContextsOnDiscoverResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
