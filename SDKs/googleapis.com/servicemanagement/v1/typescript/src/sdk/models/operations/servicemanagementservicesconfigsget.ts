import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ServicemanagementServicesConfigsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceName" })
  serviceName: string;
}

export enum ServicemanagementServicesConfigsGetViewEnum {
    Basic = "BASIC",
    Full = "FULL"
}


export class ServicemanagementServicesConfigsGetQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: ServicemanagementServicesConfigsGetViewEnum;
}


export class ServicemanagementServicesConfigsGetSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ServicemanagementServicesConfigsGetSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ServicemanagementServicesConfigsGetSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ServicemanagementServicesConfigsGetSecurityOption4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ServicemanagementServicesConfigsGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: ServicemanagementServicesConfigsGetSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: ServicemanagementServicesConfigsGetSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: ServicemanagementServicesConfigsGetSecurityOption3;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option4?: ServicemanagementServicesConfigsGetSecurityOption4;
}


export class ServicemanagementServicesConfigsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ServicemanagementServicesConfigsGetPathParams;

  @SpeakeasyMetadata()
  queryParams: ServicemanagementServicesConfigsGetQueryParams;

  @SpeakeasyMetadata()
  security: ServicemanagementServicesConfigsGetSecurity;
}


export class ServicemanagementServicesConfigsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  service?: shared.Service;

  @SpeakeasyMetadata()
  statusCode: number;
}
