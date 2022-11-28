import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV05CareContextsOnDiscoverHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostV05CareContextsOnDiscoverRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patientDiscoveryResult?: shared.PatientDiscoveryResult;
}


export class PostV05CareContextsOnDiscoverRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostV05CareContextsOnDiscoverHeaders;

  @SpeakeasyMetadata()
  request: PostV05CareContextsOnDiscoverRequests;
}


export class PostV05CareContextsOnDiscoverResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
