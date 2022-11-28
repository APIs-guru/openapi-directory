import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchIndexingDatasourcesItemsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsearchIndexingDatasourcesItemsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    brief?: boolean;
    callback?: string;
    connectorName?: string;
    debugOptionsEnableDebugging?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudsearchIndexingDatasourcesItemsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchIndexingDatasourcesItemsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchIndexingDatasourcesItemsListSecurity extends SpeakeasyBase {
    option1?: CloudsearchIndexingDatasourcesItemsListSecurityOption1;
    option2?: CloudsearchIndexingDatasourcesItemsListSecurityOption2;
}
export declare class CloudsearchIndexingDatasourcesItemsListRequest extends SpeakeasyBase {
    pathParams: CloudsearchIndexingDatasourcesItemsListPathParams;
    queryParams: CloudsearchIndexingDatasourcesItemsListQueryParams;
    security: CloudsearchIndexingDatasourcesItemsListSecurity;
}
export declare class CloudsearchIndexingDatasourcesItemsListResponse extends SpeakeasyBase {
    contentType: string;
    listItemsResponse?: shared.ListItemsResponse;
    statusCode: number;
}
