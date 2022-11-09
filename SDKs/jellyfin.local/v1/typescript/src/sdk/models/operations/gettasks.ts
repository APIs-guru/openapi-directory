import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTasksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=isEnabled" })
  isEnabled?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isHidden" })
  isHidden?: boolean;
}


export class GetTasksSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetTasksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTasksQueryParams;

  @Metadata()
  security: GetTasksSecurity;
}


export class GetTasksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TaskInfo })
  taskInfos?: shared.TaskInfo[];
}
