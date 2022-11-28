import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchDebugDatasourcesItemsSearchByViewUrlPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsearchDebugDatasourcesItemsSearchByViewUrlQueryParams extends SpeakeasyBase {
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
export declare class CloudsearchDebugDatasourcesItemsSearchByViewUrlSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchDebugDatasourcesItemsSearchByViewUrlSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchDebugDatasourcesItemsSearchByViewUrlSecurity extends SpeakeasyBase {
    option1?: CloudsearchDebugDatasourcesItemsSearchByViewUrlSecurityOption1;
    option2?: CloudsearchDebugDatasourcesItemsSearchByViewUrlSecurityOption2;
}
export declare class CloudsearchDebugDatasourcesItemsSearchByViewUrlRequest extends SpeakeasyBase {
    pathParams: CloudsearchDebugDatasourcesItemsSearchByViewUrlPathParams;
    queryParams: CloudsearchDebugDatasourcesItemsSearchByViewUrlQueryParams;
    request?: shared.SearchItemsByViewUrlRequest;
    security: CloudsearchDebugDatasourcesItemsSearchByViewUrlSecurity;
}
export declare class CloudsearchDebugDatasourcesItemsSearchByViewUrlResponse extends SpeakeasyBase {
    contentType: string;
    searchItemsByViewUrlResponse?: shared.SearchItemsByViewUrlResponse;
    statusCode: number;
}
