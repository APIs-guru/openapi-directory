import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=executionId" })
  executionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=historyId" })
  historyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sampleSeriesId" })
  sampleSeriesId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stepId" })
  stepId: string;
}


export class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListPathParams;

  @SpeakeasyMetadata()
  queryParams: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListQueryParams;

  @SpeakeasyMetadata()
  security: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListSecurity;
}


export class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listPerfSamplesResponse?: shared.ListPerfSamplesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
