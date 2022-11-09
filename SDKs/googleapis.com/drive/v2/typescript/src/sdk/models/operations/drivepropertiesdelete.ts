import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DrivePropertiesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileId" })
  fileId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=propertyKey" })
  propertyKey: string;
}


export class DrivePropertiesDeleteQueryParams extends SpeakeasyBase {
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


export class DrivePropertiesDeleteSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePropertiesDeleteSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePropertiesDeleteSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePropertiesDeleteSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePropertiesDeleteSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DrivePropertiesDeleteSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DrivePropertiesDeleteSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DrivePropertiesDeleteSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: DrivePropertiesDeleteSecurityOption4;
}


export class DrivePropertiesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DrivePropertiesDeletePathParams;

  @Metadata()
  queryParams: DrivePropertiesDeleteQueryParams;

  @Metadata()
  security: DrivePropertiesDeleteSecurity;
}


export class DrivePropertiesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
