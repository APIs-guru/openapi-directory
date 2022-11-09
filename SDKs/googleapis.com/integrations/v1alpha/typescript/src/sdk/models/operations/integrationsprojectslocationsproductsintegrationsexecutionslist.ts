import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IntegrationsProjectsLocationsProductsIntegrationsExecutionsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filterParams.customFilter" })
  filterParamsCustomFilter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filterParams.endTime" })
  filterParamsEndTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filterParams.eventStatuses" })
  filterParamsEventStatuses?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=filterParams.executionId" })
  filterParamsExecutionId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filterParams.parameterKey" })
  filterParamsParameterKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filterParams.parameterPairKey" })
  filterParamsParameterPairKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filterParams.parameterPairValue" })
  filterParamsParameterPairValue?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filterParams.parameterType" })
  filterParamsParameterType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filterParams.parameterValue" })
  filterParamsParameterValue?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filterParams.startTime" })
  filterParamsStartTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filterParams.taskStatuses" })
  filterParamsTaskStatuses?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=filterParams.triggerId" })
  filterParamsTriggerId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filterParams.workflowName" })
  filterParamsWorkflowName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=readMask" })
  readMask?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=refreshAcl" })
  refreshAcl?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=truncateParams" })
  truncateParams?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class IntegrationsProjectsLocationsProductsIntegrationsExecutionsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IntegrationsProjectsLocationsProductsIntegrationsExecutionsListPathParams;

  @Metadata()
  queryParams: IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams;

  @Metadata()
  security: IntegrationsProjectsLocationsProductsIntegrationsExecutionsListSecurity;
}


export class IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleCloudIntegrationsV1alphaListExecutionsResponse?: shared.GoogleCloudIntegrationsV1alphaListExecutionsResponse;

  @Metadata()
  statusCode: number;
}
