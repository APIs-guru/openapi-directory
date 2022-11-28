import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ClassroomUserProfilesGuardianInvitationsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=studentId" })
  studentId: string;
}

export enum ClassroomUserProfilesGuardianInvitationsListStatesEnum {
    GuardianInvitationStateUnspecified = "GUARDIAN_INVITATION_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Complete = "COMPLETE"
}


export class ClassroomUserProfilesGuardianInvitationsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=invitedEmailAddress" })
  invitedEmailAddress?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=states" })
  states?: ClassroomUserProfilesGuardianInvitationsListStatesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ClassroomUserProfilesGuardianInvitationsListSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClassroomUserProfilesGuardianInvitationsListSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClassroomUserProfilesGuardianInvitationsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: ClassroomUserProfilesGuardianInvitationsListSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: ClassroomUserProfilesGuardianInvitationsListSecurityOption2;
}


export class ClassroomUserProfilesGuardianInvitationsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ClassroomUserProfilesGuardianInvitationsListPathParams;

  @SpeakeasyMetadata()
  queryParams: ClassroomUserProfilesGuardianInvitationsListQueryParams;

  @SpeakeasyMetadata()
  security: ClassroomUserProfilesGuardianInvitationsListSecurity;
}


export class ClassroomUserProfilesGuardianInvitationsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listGuardianInvitationsResponse?: shared.ListGuardianInvitationsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
