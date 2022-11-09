import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExecuteActionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=actionId" })
  actionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class ExecuteActionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExecuteActionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ExecBody;
}


export class ExecuteActionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;
}
