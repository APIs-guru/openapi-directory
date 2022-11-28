import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CloudtasksProjectsLocationsQueuesTasksGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}


export class CloudtasksProjectsLocationsQueuesTasksGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=responseView" })
  responseView?: CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class CloudtasksProjectsLocationsQueuesTasksGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudtasksProjectsLocationsQueuesTasksGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CloudtasksProjectsLocationsQueuesTasksGetPathParams;

  @SpeakeasyMetadata()
  queryParams: CloudtasksProjectsLocationsQueuesTasksGetQueryParams;

  @SpeakeasyMetadata()
  security: CloudtasksProjectsLocationsQueuesTasksGetSecurity;
}


export class CloudtasksProjectsLocationsQueuesTasksGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  task?: shared.Task;
}
