import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class HealthcareProjectsLocationsDatasetsOperationsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum HealthcareProjectsLocationsDatasetsOperationsGetViewEnum {
    MessageViewUnspecified = "MESSAGE_VIEW_UNSPECIFIED"
,    RawOnly = "RAW_ONLY"
,    ParsedOnly = "PARSED_ONLY"
,    Full = "FULL"
,    SchematizedOnly = "SCHEMATIZED_ONLY"
,    Basic = "BASIC"
}


export class HealthcareProjectsLocationsDatasetsOperationsGetQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: HealthcareProjectsLocationsDatasetsOperationsGetViewEnum;
}


export class HealthcareProjectsLocationsDatasetsOperationsGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class HealthcareProjectsLocationsDatasetsOperationsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: HealthcareProjectsLocationsDatasetsOperationsGetPathParams;

  @Metadata()
  queryParams: HealthcareProjectsLocationsDatasetsOperationsGetQueryParams;

  @Metadata()
  security: HealthcareProjectsLocationsDatasetsOperationsGetSecurity;
}


export class HealthcareProjectsLocationsDatasetsOperationsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  operation?: shared.Operation;

  @Metadata()
  statusCode: number;
}
