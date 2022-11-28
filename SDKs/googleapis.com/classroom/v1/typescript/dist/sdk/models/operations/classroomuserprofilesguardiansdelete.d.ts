import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClassroomUserProfilesGuardiansDeletePathParams extends SpeakeasyBase {
    guardianId: string;
    studentId: string;
}
export declare class ClassroomUserProfilesGuardiansDeleteQueryParams extends SpeakeasyBase {
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
export declare class ClassroomUserProfilesGuardiansDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomUserProfilesGuardiansDeleteRequest extends SpeakeasyBase {
    pathParams: ClassroomUserProfilesGuardiansDeletePathParams;
    queryParams: ClassroomUserProfilesGuardiansDeleteQueryParams;
    security: ClassroomUserProfilesGuardiansDeleteSecurity;
}
export declare class ClassroomUserProfilesGuardiansDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
