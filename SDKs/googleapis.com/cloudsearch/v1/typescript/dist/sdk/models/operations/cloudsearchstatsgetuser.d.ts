import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchStatsGetUserQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    fromDateDay?: number;
    fromDateMonth?: number;
    fromDateYear?: number;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    toDateDay?: number;
    toDateMonth?: number;
    toDateYear?: number;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudsearchStatsGetUserSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchStatsGetUserSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchStatsGetUserSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchStatsGetUserSecurity extends SpeakeasyBase {
    option1?: CloudsearchStatsGetUserSecurityOption1;
    option2?: CloudsearchStatsGetUserSecurityOption2;
    option3?: CloudsearchStatsGetUserSecurityOption3;
}
export declare class CloudsearchStatsGetUserRequest extends SpeakeasyBase {
    queryParams: CloudsearchStatsGetUserQueryParams;
    security: CloudsearchStatsGetUserSecurity;
}
export declare class CloudsearchStatsGetUserResponse extends SpeakeasyBase {
    contentType: string;
    getCustomerUserStatsResponse?: shared.GetCustomerUserStatsResponse;
    statusCode: number;
}
