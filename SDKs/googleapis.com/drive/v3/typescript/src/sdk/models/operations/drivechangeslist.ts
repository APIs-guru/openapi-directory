import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DriveChangesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=driveId" })
  driveId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeCorpusRemovals" })
  includeCorpusRemovals?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeItemsFromAllDrives" })
  includeItemsFromAllDrives?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeLabels" })
  includeLabels?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includePermissionsForView" })
  includePermissionsForView?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeRemoved" })
  includeRemoved?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeTeamDriveItems" })
  includeTeamDriveItems?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=restrictToMyDrive" })
  restrictToMyDrive?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=spaces" })
  spaces?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" })
  supportsAllDrives?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" })
  supportsTeamDrives?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=teamDriveId" })
  teamDriveId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class DriveChangesListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveChangesListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveChangesListSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveChangesListSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveChangesListSecurityOption5 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveChangesListSecurityOption6 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveChangesListSecurityOption7 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveChangesListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DriveChangesListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DriveChangesListSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DriveChangesListSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: DriveChangesListSecurityOption4;

  @Metadata({ data: "security, option=true" })
  option5?: DriveChangesListSecurityOption5;

  @Metadata({ data: "security, option=true" })
  option6?: DriveChangesListSecurityOption6;

  @Metadata({ data: "security, option=true" })
  option7?: DriveChangesListSecurityOption7;
}


export class DriveChangesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DriveChangesListQueryParams;

  @Metadata()
  security: DriveChangesListSecurity;
}


export class DriveChangesListResponse extends SpeakeasyBase {
  @Metadata()
  changeList?: shared.ChangeList;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
