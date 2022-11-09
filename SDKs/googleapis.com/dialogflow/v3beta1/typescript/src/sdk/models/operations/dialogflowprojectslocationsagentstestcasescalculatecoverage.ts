import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DialogflowProjectsLocationsAgentsTestCasesCalculateCoveragePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agent" })
  agent: string;
}

export enum DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageTypeEnum {
    CoverageTypeUnspecified = "COVERAGE_TYPE_UNSPECIFIED"
,    Intent = "INTENT"
,    PageTransition = "PAGE_TRANSITION"
,    TransitionRouteGroup = "TRANSITION_ROUTE_GROUP"
}


export class DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption2;
}


export class DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DialogflowProjectsLocationsAgentsTestCasesCalculateCoveragePathParams;

  @Metadata()
  queryParams: DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageQueryParams;

  @Metadata()
  security: DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurity;
}


export class DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleCloudDialogflowCxV3beta1CalculateCoverageResponse?: shared.GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse;

  @Metadata()
  statusCode: number;
}
