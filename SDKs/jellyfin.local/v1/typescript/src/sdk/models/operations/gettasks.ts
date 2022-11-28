import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTasksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isEnabled" })
  isEnabled?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isHidden" })
  isHidden?: boolean;
}


export class GetTasksSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetTasksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTasksQueryParams;

  @SpeakeasyMetadata()
  security: GetTasksSecurity;
}


export class GetTasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TaskInfo })
  taskInfos?: shared.TaskInfo[];
}
