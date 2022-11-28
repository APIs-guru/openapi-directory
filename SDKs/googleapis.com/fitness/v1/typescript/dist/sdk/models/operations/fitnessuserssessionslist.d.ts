import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FitnessUsersSessionsListPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class FitnessUsersSessionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    activityType?: number[];
    alt?: shared.AltEnum;
    callback?: string;
    endTime?: string;
    fields?: string;
    includeDeleted?: boolean;
    key?: string;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startTime?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FitnessUsersSessionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersSessionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersSessionsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersSessionsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersSessionsListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersSessionsListSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersSessionsListSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersSessionsListSecurityOption8 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersSessionsListSecurityOption9 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersSessionsListSecurityOption10 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersSessionsListSecurityOption11 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersSessionsListSecurityOption12 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersSessionsListSecurityOption13 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersSessionsListSecurityOption14 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersSessionsListSecurityOption15 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersSessionsListSecurityOption16 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersSessionsListSecurityOption17 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersSessionsListSecurityOption18 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersSessionsListSecurityOption19 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersSessionsListSecurityOption20 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersSessionsListSecurityOption21 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersSessionsListSecurityOption22 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersSessionsListSecurity extends SpeakeasyBase {
    option1?: FitnessUsersSessionsListSecurityOption1;
    option2?: FitnessUsersSessionsListSecurityOption2;
    option3?: FitnessUsersSessionsListSecurityOption3;
    option4?: FitnessUsersSessionsListSecurityOption4;
    option5?: FitnessUsersSessionsListSecurityOption5;
    option6?: FitnessUsersSessionsListSecurityOption6;
    option7?: FitnessUsersSessionsListSecurityOption7;
    option8?: FitnessUsersSessionsListSecurityOption8;
    option9?: FitnessUsersSessionsListSecurityOption9;
    option10?: FitnessUsersSessionsListSecurityOption10;
    option11?: FitnessUsersSessionsListSecurityOption11;
    option12?: FitnessUsersSessionsListSecurityOption12;
    option13?: FitnessUsersSessionsListSecurityOption13;
    option14?: FitnessUsersSessionsListSecurityOption14;
    option15?: FitnessUsersSessionsListSecurityOption15;
    option16?: FitnessUsersSessionsListSecurityOption16;
    option17?: FitnessUsersSessionsListSecurityOption17;
    option18?: FitnessUsersSessionsListSecurityOption18;
    option19?: FitnessUsersSessionsListSecurityOption19;
    option20?: FitnessUsersSessionsListSecurityOption20;
    option21?: FitnessUsersSessionsListSecurityOption21;
    option22?: FitnessUsersSessionsListSecurityOption22;
}
export declare class FitnessUsersSessionsListRequest extends SpeakeasyBase {
    pathParams: FitnessUsersSessionsListPathParams;
    queryParams: FitnessUsersSessionsListQueryParams;
    security: FitnessUsersSessionsListSecurity;
}
export declare class FitnessUsersSessionsListResponse extends SpeakeasyBase {
    contentType: string;
    listSessionsResponse?: shared.ListSessionsResponse;
    statusCode: number;
}
