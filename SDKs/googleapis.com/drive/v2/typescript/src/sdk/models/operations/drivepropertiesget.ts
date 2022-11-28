import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DrivePropertiesGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" })
  fileId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=propertyKey" })
  propertyKey: string;
}


export class DrivePropertiesGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=visibility" })
  visibility?: string;
}


export class DrivePropertiesGetSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePropertiesGetSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePropertiesGetSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePropertiesGetSecurityOption4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePropertiesGetSecurityOption5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePropertiesGetSecurityOption6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePropertiesGetSecurityOption7 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePropertiesGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: DrivePropertiesGetSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: DrivePropertiesGetSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: DrivePropertiesGetSecurityOption3;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option4?: DrivePropertiesGetSecurityOption4;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option5?: DrivePropertiesGetSecurityOption5;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option6?: DrivePropertiesGetSecurityOption6;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option7?: DrivePropertiesGetSecurityOption7;
}


export class DrivePropertiesGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DrivePropertiesGetPathParams;

  @SpeakeasyMetadata()
  queryParams: DrivePropertiesGetQueryParams;

  @SpeakeasyMetadata()
  security: DrivePropertiesGetSecurity;
}


export class DrivePropertiesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  property?: shared.Property;

  @SpeakeasyMetadata()
  statusCode: number;
}
