import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClassroomInvitationsGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ClassroomInvitationsGetQueryParams extends SpeakeasyBase {
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
export declare class ClassroomInvitationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomInvitationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomInvitationsGetSecurity extends SpeakeasyBase {
    option1?: ClassroomInvitationsGetSecurityOption1;
    option2?: ClassroomInvitationsGetSecurityOption2;
}
export declare class ClassroomInvitationsGetRequest extends SpeakeasyBase {
    pathParams: ClassroomInvitationsGetPathParams;
    queryParams: ClassroomInvitationsGetQueryParams;
    security: ClassroomInvitationsGetSecurity;
}
export declare class ClassroomInvitationsGetResponse extends SpeakeasyBase {
    contentType: string;
    invitation?: shared.Invitation;
    statusCode: number;
}
