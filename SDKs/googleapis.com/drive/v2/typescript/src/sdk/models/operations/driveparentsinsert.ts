import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DriveParentsInsertPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileId" })
  fileId: string;
}


export class DriveParentsInsertQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enforceSingleParent" })
  enforceSingleParent?: boolean;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" })
  supportsAllDrives?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" })
  supportsTeamDrives?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class DriveParentsInsertSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveParentsInsertSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveParentsInsertSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveParentsInsertSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DriveParentsInsertSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DriveParentsInsertSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DriveParentsInsertSecurityOption3;
}


export class DriveParentsInsertRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DriveParentsInsertPathParams;

  @Metadata()
  queryParams: DriveParentsInsertQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ParentReference;

  @Metadata()
  security: DriveParentsInsertSecurity;
}


export class DriveParentsInsertResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  parentReference?: shared.ParentReference;

  @Metadata()
  statusCode: number;
}
