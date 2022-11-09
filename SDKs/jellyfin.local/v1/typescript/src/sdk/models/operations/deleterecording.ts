import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteRecordingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=recordingId" })
  recordingId: string;
}


export class DeleteRecordingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class DeleteRecordingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRecordingPathParams;

  @Metadata()
  security: DeleteRecordingSecurity;
}


export class DeleteRecordingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
