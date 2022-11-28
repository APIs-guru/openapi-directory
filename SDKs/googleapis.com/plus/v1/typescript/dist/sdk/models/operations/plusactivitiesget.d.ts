import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PlusActivitiesGetPathParams extends SpeakeasyBase {
    activityId: string;
}
export declare class PlusActivitiesGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class PlusActivitiesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PlusActivitiesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PlusActivitiesGetSecurity extends SpeakeasyBase {
    option1?: PlusActivitiesGetSecurityOption1;
    option2?: PlusActivitiesGetSecurityOption2;
}
export declare class PlusActivitiesGetRequest extends SpeakeasyBase {
    pathParams: PlusActivitiesGetPathParams;
    queryParams: PlusActivitiesGetQueryParams;
    security: PlusActivitiesGetSecurity;
}
export declare class PlusActivitiesGetResponse extends SpeakeasyBase {
    activity?: shared.Activity;
    contentType: string;
    statusCode: number;
}
