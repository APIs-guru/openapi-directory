import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchDebugIdentitysourcesItemsListForunmappedidentityPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    debugOptionsEnableDebugging?: boolean;
    fields?: string;
    groupResourceName?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    userResourceName?: string;
}
export declare class CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurity extends SpeakeasyBase {
    option1?: CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption1;
    option2?: CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption2;
}
export declare class CloudsearchDebugIdentitysourcesItemsListForunmappedidentityRequest extends SpeakeasyBase {
    pathParams: CloudsearchDebugIdentitysourcesItemsListForunmappedidentityPathParams;
    queryParams: CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams;
    security: CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurity;
}
export declare class CloudsearchDebugIdentitysourcesItemsListForunmappedidentityResponse extends SpeakeasyBase {
    contentType: string;
    listItemNamesForUnmappedIdentityResponse?: shared.ListItemNamesForUnmappedIdentityResponse;
    statusCode: number;
}
