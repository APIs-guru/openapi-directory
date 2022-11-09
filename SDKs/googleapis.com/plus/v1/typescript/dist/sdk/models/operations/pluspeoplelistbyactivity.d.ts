import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum PlusPeopleListByActivityCollectionEnum {
    Plusoners = "plusoners",
    Resharers = "resharers"
}
export declare class PlusPeopleListByActivityPathParams extends SpeakeasyBase {
    activityId: string;
    collection: PlusPeopleListByActivityCollectionEnum;
}
export declare class PlusPeopleListByActivityQueryParams extends SpeakeasyBase {
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
export declare class PlusPeopleListByActivitySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PlusPeopleListByActivitySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PlusPeopleListByActivitySecurity extends SpeakeasyBase {
    option1?: PlusPeopleListByActivitySecurityOption1;
    option2?: PlusPeopleListByActivitySecurityOption2;
}
export declare class PlusPeopleListByActivityRequest extends SpeakeasyBase {
    pathParams: PlusPeopleListByActivityPathParams;
    queryParams: PlusPeopleListByActivityQueryParams;
    security: PlusPeopleListByActivitySecurity;
}
export declare class PlusPeopleListByActivityResponse extends SpeakeasyBase {
    contentType: string;
    peopleFeed?: shared.PeopleFeed;
    statusCode: number;
}
