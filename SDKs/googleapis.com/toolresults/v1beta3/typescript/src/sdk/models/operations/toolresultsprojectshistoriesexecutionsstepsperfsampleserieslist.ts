import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=executionId" })
  executionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=historyId" })
  historyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stepId" })
  stepId: string;
}

export enum ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum {
    PerfMetricTypeUnspecified = "perfMetricTypeUnspecified",
    Memory = "memory",
    Cpu = "cpu",
    Network = "network",
    Graphics = "graphics"
}


export class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListQueryParams extends SpeakeasyBase {
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
  filter?: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListPathParams;

  @SpeakeasyMetadata()
  queryParams: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListQueryParams;

  @SpeakeasyMetadata()
  security: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListSecurity;
}


export class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listPerfSampleSeriesResponse?: shared.ListPerfSampleSeriesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
