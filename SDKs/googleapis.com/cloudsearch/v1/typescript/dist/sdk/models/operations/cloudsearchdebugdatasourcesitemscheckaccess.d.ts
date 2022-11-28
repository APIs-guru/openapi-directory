import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchDebugDatasourcesItemsCheckAccessPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsearchDebugDatasourcesItemsCheckAccessQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    debugOptionsEnableDebugging?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchDebugDatasourcesItemsCheckAccessSecurity extends SpeakeasyBase {
    option1?: CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1;
    option2?: CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption2;
}
export declare class CloudsearchDebugDatasourcesItemsCheckAccessRequest extends SpeakeasyBase {
    pathParams: CloudsearchDebugDatasourcesItemsCheckAccessPathParams;
    queryParams: CloudsearchDebugDatasourcesItemsCheckAccessQueryParams;
    request?: shared.Principal;
    security: CloudsearchDebugDatasourcesItemsCheckAccessSecurity;
}
export declare class CloudsearchDebugDatasourcesItemsCheckAccessResponse extends SpeakeasyBase {
    checkAccessResponse?: shared.CheckAccessResponse;
    contentType: string;
    statusCode: number;
}
