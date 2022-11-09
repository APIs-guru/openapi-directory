import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MonitoringServicesServiceLevelObjectivesGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum MonitoringServicesServiceLevelObjectivesGetViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED"
,    Full = "FULL"
,    Explicit = "EXPLICIT"
}


export class MonitoringServicesServiceLevelObjectivesGetQueryParams extends SpeakeasyBase {
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
  view?: MonitoringServicesServiceLevelObjectivesGetViewEnum;
}


export class MonitoringServicesServiceLevelObjectivesGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringServicesServiceLevelObjectivesGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringServicesServiceLevelObjectivesGetSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringServicesServiceLevelObjectivesGetSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringServicesServiceLevelObjectivesGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: MonitoringServicesServiceLevelObjectivesGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: MonitoringServicesServiceLevelObjectivesGetSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: MonitoringServicesServiceLevelObjectivesGetSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: MonitoringServicesServiceLevelObjectivesGetSecurityOption4;
}


export class MonitoringServicesServiceLevelObjectivesGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MonitoringServicesServiceLevelObjectivesGetPathParams;

  @Metadata()
  queryParams: MonitoringServicesServiceLevelObjectivesGetQueryParams;

  @Metadata()
  security: MonitoringServicesServiceLevelObjectivesGetSecurity;
}


export class MonitoringServicesServiceLevelObjectivesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceLevelObjective?: shared.ServiceLevelObjective;

  @Metadata()
  statusCode: number;
}
