import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DriveFilesCopyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" })
  fileId: string;
}

export enum DriveFilesCopyVisibilityEnum {
    Default = "DEFAULT",
    Private = "PRIVATE"
}


export class DriveFilesCopyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=convert" })
  convert?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enforceSingleParent" })
  enforceSingleParent?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeLabels" })
  includeLabels?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includePermissionsForView" })
  includePermissionsForView?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ocr" })
  ocr?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ocrLanguage" })
  ocrLanguage?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pinned" })
  pinned?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" })
  supportsAllDrives?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" })
  supportsTeamDrives?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timedTextLanguage" })
  timedTextLanguage?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timedTextTrackName" })
  timedTextTrackName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=visibility" })
  visibility?: DriveFilesCopyVisibilityEnum;
}


export class DriveFilesCopySecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveFilesCopySecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveFilesCopySecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveFilesCopySecurityOption4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveFilesCopySecurityOption5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveFilesCopySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: DriveFilesCopySecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: DriveFilesCopySecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: DriveFilesCopySecurityOption3;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option4?: DriveFilesCopySecurityOption4;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option5?: DriveFilesCopySecurityOption5;
}


export class DriveFilesCopyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DriveFilesCopyPathParams;

  @SpeakeasyMetadata()
  queryParams: DriveFilesCopyQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.FileInput;

  @SpeakeasyMetadata()
  security: DriveFilesCopySecurity;
}


export class DriveFilesCopyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  file?: shared.File;

  @SpeakeasyMetadata()
  statusCode: number;
}
