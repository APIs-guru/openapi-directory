import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SolveVrpRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Request;
}


export class SolveVrpResponse extends SpeakeasyBase {
  @Metadata()
  badRequest?: shared.BadRequest;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  internalErrorMessage?: shared.InternalErrorMessage;

  @Metadata()
  response?: shared.Response;

  @Metadata()
  statusCode: number;
}
