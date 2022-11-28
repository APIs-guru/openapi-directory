import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PlusActivitiesSearchOrderByEnum {
    Best = "best",
    Recent = "recent"
}
export declare class PlusActivitiesSearchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    language?: string;
    maxResults?: number;
    oauthToken?: string;
    orderBy?: PlusActivitiesSearchOrderByEnum;
    pageToken?: string;
    prettyPrint?: boolean;
    query: string;
    quotaUser?: string;
    userIp?: string;
}
export declare class PlusActivitiesSearchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PlusActivitiesSearchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PlusActivitiesSearchSecurity extends SpeakeasyBase {
    option1?: PlusActivitiesSearchSecurityOption1;
    option2?: PlusActivitiesSearchSecurityOption2;
}
export declare class PlusActivitiesSearchRequest extends SpeakeasyBase {
    queryParams: PlusActivitiesSearchQueryParams;
    security: PlusActivitiesSearchSecurity;
}
export declare class PlusActivitiesSearchResponse extends SpeakeasyBase {
    activityFeed?: shared.ActivityFeed;
    contentType: string;
    statusCode: number;
}
