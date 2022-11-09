import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05CareContextsDiscoverHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-HIP-ID" })
  xHipId: string;
}


export class PostV05CareContextsDiscoverRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  patientDiscoveryRequest?: shared.PatientDiscoveryRequest;
}


export class PostV05CareContextsDiscoverRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05CareContextsDiscoverHeaders;

  @Metadata()
  request: PostV05CareContextsDiscoverRequests;
}


export class PostV05CareContextsDiscoverResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
