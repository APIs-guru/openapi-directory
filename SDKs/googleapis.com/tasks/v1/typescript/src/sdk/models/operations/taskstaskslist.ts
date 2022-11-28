import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TasksTasksListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tasklist" })
  tasklist: string;
}


export class TasksTasksListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=completedMax" })
  completedMax?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=completedMin" })
  completedMin?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dueMax" })
  dueMax?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dueMin" })
  dueMin?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showCompleted" })
  showCompleted?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showDeleted" })
  showDeleted?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showHidden" })
  showHidden?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedMin" })
  updatedMin?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class TasksTasksListSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class TasksTasksListSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class TasksTasksListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: TasksTasksListSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: TasksTasksListSecurityOption2;
}


export class TasksTasksListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TasksTasksListPathParams;

  @SpeakeasyMetadata()
  queryParams: TasksTasksListQueryParams;

  @SpeakeasyMetadata()
  security: TasksTasksListSecurity;
}


export class TasksTasksListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tasks?: shared.Tasks;
}
