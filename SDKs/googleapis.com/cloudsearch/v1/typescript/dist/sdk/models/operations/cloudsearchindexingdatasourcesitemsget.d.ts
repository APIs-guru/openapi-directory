import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchIndexingDatasourcesItemsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsearchIndexingDatasourcesItemsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    connectorName?: string;
    debugOptionsEnableDebugging?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudsearchIndexingDatasourcesItemsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchIndexingDatasourcesItemsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchIndexingDatasourcesItemsGetSecurity extends SpeakeasyBase {
    option1?: CloudsearchIndexingDatasourcesItemsGetSecurityOption1;
    option2?: CloudsearchIndexingDatasourcesItemsGetSecurityOption2;
}
export declare class CloudsearchIndexingDatasourcesItemsGetRequest extends SpeakeasyBase {
    pathParams: CloudsearchIndexingDatasourcesItemsGetPathParams;
    queryParams: CloudsearchIndexingDatasourcesItemsGetQueryParams;
    security: CloudsearchIndexingDatasourcesItemsGetSecurity;
}
export declare class CloudsearchIndexingDatasourcesItemsGetResponse extends SpeakeasyBase {
    contentType: string;
    item?: shared.Item;
    statusCode: number;
}
