import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DriveTeamdrivesCreateQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class DriveTeamdrivesCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveTeamdrivesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DriveTeamdrivesCreateQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.TeamDrive;

  @SpeakeasyMetadata()
  security: DriveTeamdrivesCreateSecurity;
}


export class DriveTeamdrivesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamDrive?: shared.TeamDrive;
}
