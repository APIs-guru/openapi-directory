import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRecordingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recordingId" })
  recordingId: string;
}


export class GetRecordingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetRecordingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetRecordingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRecordingPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRecordingQueryParams;

  @SpeakeasyMetadata()
  security: GetRecordingSecurity;
}


export class GetRecordingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  baseItemDto?: shared.BaseItemDto;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
