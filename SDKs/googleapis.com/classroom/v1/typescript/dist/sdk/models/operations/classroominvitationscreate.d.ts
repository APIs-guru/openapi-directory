import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClassroomInvitationsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ClassroomInvitationsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomInvitationsCreateRequest extends SpeakeasyBase {
    queryParams: ClassroomInvitationsCreateQueryParams;
    request?: shared.Invitation;
    security: ClassroomInvitationsCreateSecurity;
}
export declare class ClassroomInvitationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    invitation?: shared.Invitation;
    statusCode: number;
}
