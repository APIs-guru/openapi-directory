import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DataflowProjectsLocationsTemplatesGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=location" })
  location: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}

export enum DataflowProjectsLocationsTemplatesGetViewEnum {
    MetadataOnly = "METADATA_ONLY"
}


export class DataflowProjectsLocationsTemplatesGetQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=gcsPath" })
  gcsPath?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: DataflowProjectsLocationsTemplatesGetViewEnum;
}


export class DataflowProjectsLocationsTemplatesGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsLocationsTemplatesGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsLocationsTemplatesGetSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsLocationsTemplatesGetSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsLocationsTemplatesGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DataflowProjectsLocationsTemplatesGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DataflowProjectsLocationsTemplatesGetSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DataflowProjectsLocationsTemplatesGetSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: DataflowProjectsLocationsTemplatesGetSecurityOption4;
}


export class DataflowProjectsLocationsTemplatesGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DataflowProjectsLocationsTemplatesGetPathParams;

  @Metadata()
  queryParams: DataflowProjectsLocationsTemplatesGetQueryParams;

  @Metadata()
  security: DataflowProjectsLocationsTemplatesGetSecurity;
}


export class DataflowProjectsLocationsTemplatesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getTemplateResponse?: shared.GetTemplateResponse;

  @Metadata()
  statusCode: number;
}
