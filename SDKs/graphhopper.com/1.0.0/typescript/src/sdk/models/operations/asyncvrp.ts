import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AsyncVrpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Request;
}


export class AsyncVrpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequest?: shared.BadRequest;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  internalErrorMessage?: shared.InternalErrorMessage;

  @SpeakeasyMetadata()
  jobId?: shared.JobId;

  @SpeakeasyMetadata()
  statusCode: number;
}
