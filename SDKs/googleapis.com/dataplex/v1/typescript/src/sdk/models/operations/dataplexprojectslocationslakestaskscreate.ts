import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DataplexProjectsLocationsLakesTasksCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class DataplexProjectsLocationsLakesTasksCreateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=taskId" })
  taskId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=validateOnly" })
  validateOnly?: boolean;
}


export class DataplexProjectsLocationsLakesTasksCreateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataplexProjectsLocationsLakesTasksCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DataplexProjectsLocationsLakesTasksCreatePathParams;

  @Metadata()
  queryParams: DataplexProjectsLocationsLakesTasksCreateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.GoogleCloudDataplexV1Task;

  @Metadata()
  security: DataplexProjectsLocationsLakesTasksCreateSecurity;
}


export class DataplexProjectsLocationsLakesTasksCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleLongrunningOperation?: shared.GoogleLongrunningOperation;

  @Metadata()
  statusCode: number;
}
