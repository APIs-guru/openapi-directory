import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchQuerySourcesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestOptionsDebugOptionsEnableDebugging?: boolean;
    requestOptionsLanguageCode?: string;
    requestOptionsSearchApplicationId?: string;
    requestOptionsTimeZone?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudsearchQuerySourcesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchQuerySourcesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchQuerySourcesListSecurity extends SpeakeasyBase {
    option1?: CloudsearchQuerySourcesListSecurityOption1;
    option2?: CloudsearchQuerySourcesListSecurityOption2;
}
export declare class CloudsearchQuerySourcesListRequest extends SpeakeasyBase {
    queryParams: CloudsearchQuerySourcesListQueryParams;
    security: CloudsearchQuerySourcesListSecurity;
}
export declare class CloudsearchQuerySourcesListResponse extends SpeakeasyBase {
    contentType: string;
    listQuerySourcesResponse?: shared.ListQuerySourcesResponse;
    statusCode: number;
}
