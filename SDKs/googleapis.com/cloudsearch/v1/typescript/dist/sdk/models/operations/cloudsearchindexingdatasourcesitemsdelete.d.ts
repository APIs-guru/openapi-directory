import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchIndexingDatasourcesItemsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare enum CloudsearchIndexingDatasourcesItemsDeleteModeEnum {
    Unspecified = "UNSPECIFIED",
    Synchronous = "SYNCHRONOUS",
    Asynchronous = "ASYNCHRONOUS"
}
export declare class CloudsearchIndexingDatasourcesItemsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    connectorName?: string;
    debugOptionsEnableDebugging?: boolean;
    fields?: string;
    key?: string;
    mode?: CloudsearchIndexingDatasourcesItemsDeleteModeEnum;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    version?: string;
}
export declare class CloudsearchIndexingDatasourcesItemsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchIndexingDatasourcesItemsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchIndexingDatasourcesItemsDeleteSecurity extends SpeakeasyBase {
    option1?: CloudsearchIndexingDatasourcesItemsDeleteSecurityOption1;
    option2?: CloudsearchIndexingDatasourcesItemsDeleteSecurityOption2;
}
export declare class CloudsearchIndexingDatasourcesItemsDeleteRequest extends SpeakeasyBase {
    pathParams: CloudsearchIndexingDatasourcesItemsDeletePathParams;
    queryParams: CloudsearchIndexingDatasourcesItemsDeleteQueryParams;
    security: CloudsearchIndexingDatasourcesItemsDeleteSecurity;
}
export declare class CloudsearchIndexingDatasourcesItemsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
