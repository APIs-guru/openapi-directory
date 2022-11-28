import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV05CareContextsDiscoverHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIP-ID" })
  xHipId: string;
}


export class PostV05CareContextsDiscoverRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patientDiscoveryRequest?: shared.PatientDiscoveryRequest;
}


export class PostV05CareContextsDiscoverRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostV05CareContextsDiscoverHeaders;

  @SpeakeasyMetadata()
  request: PostV05CareContextsDiscoverRequests;
}


export class PostV05CareContextsDiscoverResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
