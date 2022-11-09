import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DrivePropertiesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileId" })
  fileId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=propertyKey" })
  propertyKey: string;
}


export class DrivePropertiesUpdateQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=visibility" })
  visibility?: string;
}


export class DrivePropertiesUpdateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePropertiesUpdateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePropertiesUpdateSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePropertiesUpdateSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePropertiesUpdateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DrivePropertiesUpdateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DrivePropertiesUpdateSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DrivePropertiesUpdateSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: DrivePropertiesUpdateSecurityOption4;
}


export class DrivePropertiesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DrivePropertiesUpdatePathParams;

  @Metadata()
  queryParams: DrivePropertiesUpdateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Property;

  @Metadata()
  security: DrivePropertiesUpdateSecurity;
}


export class DrivePropertiesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  property?: shared.Property;

  @Metadata()
  statusCode: number;
}
