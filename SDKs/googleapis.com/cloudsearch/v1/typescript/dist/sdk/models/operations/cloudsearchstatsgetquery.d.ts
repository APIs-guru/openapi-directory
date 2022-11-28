import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchStatsGetQueryQueryParams extends SpeakeasyBase {
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
export declare class CloudsearchStatsGetQuerySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchStatsGetQuerySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchStatsGetQuerySecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchStatsGetQuerySecurity extends SpeakeasyBase {
    option1?: CloudsearchStatsGetQuerySecurityOption1;
    option2?: CloudsearchStatsGetQuerySecurityOption2;
    option3?: CloudsearchStatsGetQuerySecurityOption3;
}
export declare class CloudsearchStatsGetQueryRequest extends SpeakeasyBase {
    queryParams: CloudsearchStatsGetQueryQueryParams;
    security: CloudsearchStatsGetQuerySecurity;
}
export declare class CloudsearchStatsGetQueryResponse extends SpeakeasyBase {
    contentType: string;
    getCustomerQueryStatsResponse?: shared.GetCustomerQueryStatsResponse;
    statusCode: number;
}
