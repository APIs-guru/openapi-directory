import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IntegrationsProjectsLocationsProductsIntegrationsExecutionsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterParams.customFilter" })
  filterParamsCustomFilter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterParams.endTime" })
  filterParamsEndTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterParams.eventStatuses" })
  filterParamsEventStatuses?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterParams.executionId" })
  filterParamsExecutionId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterParams.parameterKey" })
  filterParamsParameterKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterParams.parameterPairKey" })
  filterParamsParameterPairKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterParams.parameterPairValue" })
  filterParamsParameterPairValue?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterParams.parameterType" })
  filterParamsParameterType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterParams.parameterValue" })
  filterParamsParameterValue?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterParams.startTime" })
  filterParamsStartTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterParams.taskStatuses" })
  filterParamsTaskStatuses?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterParams.workflowName" })
  filterParamsWorkflowName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readMask" })
  readMask?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=refreshAcl" })
  refreshAcl?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=truncateParams" })
  truncateParams?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class IntegrationsProjectsLocationsProductsIntegrationsExecutionsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IntegrationsProjectsLocationsProductsIntegrationsExecutionsListPathParams;

  @SpeakeasyMetadata()
  queryParams: IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams;

  @SpeakeasyMetadata()
  security: IntegrationsProjectsLocationsProductsIntegrationsExecutionsListSecurity;
}


export class IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleCloudIntegrationsV1alphaListExecutionsResponse?: shared.GoogleCloudIntegrationsV1alphaListExecutionsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
