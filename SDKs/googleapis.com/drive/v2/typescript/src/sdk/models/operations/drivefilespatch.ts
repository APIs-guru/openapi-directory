import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DriveFilesPatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" })
  fileId: string;
}

export enum DriveFilesPatchModifiedDateBehaviorEnum {
    FromBody = "fromBody",
    FromBodyIfNeeded = "fromBodyIfNeeded",
    FromBodyOrNow = "fromBodyOrNow",
    NoChange = "noChange",
    Now = "now",
    NowIfNeeded = "nowIfNeeded"
}


export class DriveFilesPatchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=addParents" })
  addParents?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modifiedDateBehavior" })
  modifiedDateBehavior?: DriveFilesPatchModifiedDateBehaviorEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=newRevision" })
  newRevision?: boolean;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=removeParents" })
  removeParents?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setModifiedDate" })
  setModifiedDate?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" })
  supportsAllDrives?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" })
  supportsTeamDrives?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timedTextLanguage" })
  timedTextLanguage?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timedTextTrackName" })
  timedTextTrackName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateViewedDate" })
  updateViewedDate?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useContentAsIndexableText" })
  useContentAsIndexableText?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class DriveFilesPatchSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveFilesPatchSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveFilesPatchSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveFilesPatchSecurityOption4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveFilesPatchSecurityOption5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveFilesPatchSecurityOption6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveFilesPatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: DriveFilesPatchSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: DriveFilesPatchSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: DriveFilesPatchSecurityOption3;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option4?: DriveFilesPatchSecurityOption4;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option5?: DriveFilesPatchSecurityOption5;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option6?: DriveFilesPatchSecurityOption6;
}


export class DriveFilesPatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DriveFilesPatchPathParams;

  @SpeakeasyMetadata()
  queryParams: DriveFilesPatchQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.FileInput;

  @SpeakeasyMetadata()
  security: DriveFilesPatchSecurity;
}


export class DriveFilesPatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  file?: shared.File;

  @SpeakeasyMetadata()
  statusCode: number;
}
