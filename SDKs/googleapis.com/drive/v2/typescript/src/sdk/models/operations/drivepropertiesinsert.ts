import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DrivePropertiesInsertPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileId" })
  fileId: string;
}


export class DrivePropertiesInsertQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class DrivePropertiesInsertSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePropertiesInsertSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePropertiesInsertSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePropertiesInsertSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePropertiesInsertSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DrivePropertiesInsertSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DrivePropertiesInsertSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DrivePropertiesInsertSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: DrivePropertiesInsertSecurityOption4;
}


export class DrivePropertiesInsertRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DrivePropertiesInsertPathParams;

  @Metadata()
  queryParams: DrivePropertiesInsertQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Property;

  @Metadata()
  security: DrivePropertiesInsertSecurity;
}


export class DrivePropertiesInsertResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  property?: shared.Property;

  @Metadata()
  statusCode: number;
}
