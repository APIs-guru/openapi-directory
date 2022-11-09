import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DriveFilesInsertVisibilityEnum {
    Default = "DEFAULT"
,    Private = "PRIVATE"
}


export class DriveFilesInsertQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=convert" })
  convert?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enforceSingleParent" })
  enforceSingleParent?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeLabels" })
  includeLabels?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includePermissionsForView" })
  includePermissionsForView?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ocr" })
  ocr?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ocrLanguage" })
  ocrLanguage?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pinned" })
  pinned?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" })
  supportsAllDrives?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" })
  supportsTeamDrives?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timedTextLanguage" })
  timedTextLanguage?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timedTextTrackName" })
  timedTextTrackName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=useContentAsIndexableText" })
  useContentAsIndexableText?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=visibility" })
  visibility?: DriveFilesInsertVisibilityEnum;
}


export class DriveFilesInsertSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveFilesInsertSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveFilesInsertSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveFilesInsertSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveFilesInsertSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DriveFilesInsertSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DriveFilesInsertSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DriveFilesInsertSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: DriveFilesInsertSecurityOption4;
}


export class DriveFilesInsertRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DriveFilesInsertQueryParams;

  @Metadata({ data: "request, media_type=application/octet-stream" })
  request?: Uint8Array;

  @Metadata()
  security: DriveFilesInsertSecurity;
}


export class DriveFilesInsertResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  file?: shared.File;

  @Metadata()
  statusCode: number;
}
