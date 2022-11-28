import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DataflowProjectsLocationsTemplatesLaunchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" })
  location: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class DataflowProjectsLocationsTemplatesLaunchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dynamicTemplate.gcsPath" })
  dynamicTemplateGcsPath?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dynamicTemplate.stagingLocation" })
  dynamicTemplateStagingLocation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gcsPath" })
  gcsPath?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" })
  validateOnly?: boolean;
}


export class DataflowProjectsLocationsTemplatesLaunchSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsLocationsTemplatesLaunchSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsLocationsTemplatesLaunchSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsLocationsTemplatesLaunchSecurityOption4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsLocationsTemplatesLaunchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: DataflowProjectsLocationsTemplatesLaunchSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: DataflowProjectsLocationsTemplatesLaunchSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: DataflowProjectsLocationsTemplatesLaunchSecurityOption3;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option4?: DataflowProjectsLocationsTemplatesLaunchSecurityOption4;
}


export class DataflowProjectsLocationsTemplatesLaunchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DataflowProjectsLocationsTemplatesLaunchPathParams;

  @SpeakeasyMetadata()
  queryParams: DataflowProjectsLocationsTemplatesLaunchQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.LaunchTemplateParameters;

  @SpeakeasyMetadata()
  security: DataflowProjectsLocationsTemplatesLaunchSecurity;
}


export class DataflowProjectsLocationsTemplatesLaunchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  launchTemplateResponse?: shared.LaunchTemplateResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
