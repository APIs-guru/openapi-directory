import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchQuerySearchQueryParams extends SpeakeasyBase {
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
export declare class CloudsearchQuerySearchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchQuerySearchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchQuerySearchSecurity extends SpeakeasyBase {
    option1?: CloudsearchQuerySearchSecurityOption1;
    option2?: CloudsearchQuerySearchSecurityOption2;
}
export declare class CloudsearchQuerySearchRequest extends SpeakeasyBase {
    queryParams: CloudsearchQuerySearchQueryParams;
    request?: shared.SearchRequest;
    security: CloudsearchQuerySearchSecurity;
}
export declare class CloudsearchQuerySearchResponse extends SpeakeasyBase {
    contentType: string;
    searchResponse?: shared.SearchResponse;
    statusCode: number;
}
