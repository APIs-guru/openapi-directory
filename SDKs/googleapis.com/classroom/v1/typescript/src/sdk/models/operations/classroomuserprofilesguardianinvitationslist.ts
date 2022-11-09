import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ClassroomUserProfilesGuardianInvitationsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=studentId" })
  studentId: string;
}

export enum ClassroomUserProfilesGuardianInvitationsListStatesEnum {
    GuardianInvitationStateUnspecified = "GUARDIAN_INVITATION_STATE_UNSPECIFIED"
,    Pending = "PENDING"
,    Complete = "COMPLETE"
}


export class ClassroomUserProfilesGuardianInvitationsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=invitedEmailAddress" })
  invitedEmailAddress?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=states" })
  states?: ClassroomUserProfilesGuardianInvitationsListStatesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ClassroomUserProfilesGuardianInvitationsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClassroomUserProfilesGuardianInvitationsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClassroomUserProfilesGuardianInvitationsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ClassroomUserProfilesGuardianInvitationsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ClassroomUserProfilesGuardianInvitationsListSecurityOption2;
}


export class ClassroomUserProfilesGuardianInvitationsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ClassroomUserProfilesGuardianInvitationsListPathParams;

  @Metadata()
  queryParams: ClassroomUserProfilesGuardianInvitationsListQueryParams;

  @Metadata()
  security: ClassroomUserProfilesGuardianInvitationsListSecurity;
}


export class ClassroomUserProfilesGuardianInvitationsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listGuardianInvitationsResponse?: shared.ListGuardianInvitationsResponse;

  @Metadata()
  statusCode: number;
}
