import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExecuteActionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=actionId" })
  actionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class ExecuteActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExecuteActionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ExecBody;
}


export class ExecuteActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
