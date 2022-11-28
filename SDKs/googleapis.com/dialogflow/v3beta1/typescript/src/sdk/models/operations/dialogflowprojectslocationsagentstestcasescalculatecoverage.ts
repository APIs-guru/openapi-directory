import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DialogflowProjectsLocationsAgentsTestCasesCalculateCoveragePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agent" })
  agent: string;
}

export enum DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageTypeEnum {
    CoverageTypeUnspecified = "COVERAGE_TYPE_UNSPECIFIED",
    Intent = "INTENT",
    PageTransition = "PAGE_TRANSITION",
    TransitionRouteGroup = "TRANSITION_ROUTE_GROUP"
}


export class DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption2;
}


export class DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DialogflowProjectsLocationsAgentsTestCasesCalculateCoveragePathParams;

  @SpeakeasyMetadata()
  queryParams: DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageQueryParams;

  @SpeakeasyMetadata()
  security: DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurity;
}


export class DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleCloudDialogflowCxV3beta1CalculateCoverageResponse?: shared.GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
