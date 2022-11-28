import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PlusActivitiesListCollectionEnum {
    Public = "public"
}
export declare class PlusActivitiesListPathParams extends SpeakeasyBase {
    collection: PlusActivitiesListCollectionEnum;
    userId: string;
}
export declare class PlusActivitiesListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class PlusActivitiesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PlusActivitiesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PlusActivitiesListSecurity extends SpeakeasyBase {
    option1?: PlusActivitiesListSecurityOption1;
    option2?: PlusActivitiesListSecurityOption2;
}
export declare class PlusActivitiesListRequest extends SpeakeasyBase {
    pathParams: PlusActivitiesListPathParams;
    queryParams: PlusActivitiesListQueryParams;
    security: PlusActivitiesListSecurity;
}
export declare class PlusActivitiesListResponse extends SpeakeasyBase {
    activityFeed?: shared.ActivityFeed;
    contentType: string;
    statusCode: number;
}
