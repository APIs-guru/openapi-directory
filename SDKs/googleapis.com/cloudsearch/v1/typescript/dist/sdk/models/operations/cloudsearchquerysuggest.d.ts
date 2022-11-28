import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchQuerySuggestQueryParams extends SpeakeasyBase {
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
export declare class CloudsearchQuerySuggestSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchQuerySuggestSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchQuerySuggestSecurity extends SpeakeasyBase {
    option1?: CloudsearchQuerySuggestSecurityOption1;
    option2?: CloudsearchQuerySuggestSecurityOption2;
}
export declare class CloudsearchQuerySuggestRequest extends SpeakeasyBase {
    queryParams: CloudsearchQuerySuggestQueryParams;
    request?: shared.SuggestRequest;
    security: CloudsearchQuerySuggestSecurity;
}
export declare class CloudsearchQuerySuggestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    suggestResponse?: shared.SuggestResponse;
}
