import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption2;
}


export class DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryPathParams;

  @Metadata()
  queryParams: DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryQueryParams;

  @Metadata()
  security: DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurity;
}


export class DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse?: shared.GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse;

  @Metadata()
  statusCode: number;
}
