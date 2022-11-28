import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MonitoringServicesServiceLevelObjectivesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum MonitoringServicesServiceLevelObjectivesListViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Full = "FULL",
    Explicit = "EXPLICIT"
}


export class MonitoringServicesServiceLevelObjectivesListQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: MonitoringServicesServiceLevelObjectivesListViewEnum;
}


export class MonitoringServicesServiceLevelObjectivesListSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringServicesServiceLevelObjectivesListSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringServicesServiceLevelObjectivesListSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MonitoringServicesServiceLevelObjectivesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: MonitoringServicesServiceLevelObjectivesListSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: MonitoringServicesServiceLevelObjectivesListSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: MonitoringServicesServiceLevelObjectivesListSecurityOption3;
}


export class MonitoringServicesServiceLevelObjectivesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MonitoringServicesServiceLevelObjectivesListPathParams;

  @SpeakeasyMetadata()
  queryParams: MonitoringServicesServiceLevelObjectivesListQueryParams;

  @SpeakeasyMetadata()
  security: MonitoringServicesServiceLevelObjectivesListSecurity;
}


export class MonitoringServicesServiceLevelObjectivesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listServiceLevelObjectivesResponse?: shared.ListServiceLevelObjectivesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
