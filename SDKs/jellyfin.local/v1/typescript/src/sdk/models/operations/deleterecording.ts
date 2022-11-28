import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteRecordingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recordingId" })
  recordingId: string;
}


export class DeleteRecordingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class DeleteRecordingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteRecordingPathParams;

  @SpeakeasyMetadata()
  security: DeleteRecordingSecurity;
}


export class DeleteRecordingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
