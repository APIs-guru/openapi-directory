import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchIndexingDatasourcesItemsDeleteQueueItemsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsearchIndexingDatasourcesItemsDeleteQueueItemsQueryParams extends SpeakeasyBase {
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
export declare class CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurity extends SpeakeasyBase {
    option1?: CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurityOption1;
    option2?: CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurityOption2;
}
export declare class CloudsearchIndexingDatasourcesItemsDeleteQueueItemsRequest extends SpeakeasyBase {
    pathParams: CloudsearchIndexingDatasourcesItemsDeleteQueueItemsPathParams;
    queryParams: CloudsearchIndexingDatasourcesItemsDeleteQueueItemsQueryParams;
    request?: shared.DeleteQueueItemsRequest;
    security: CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurity;
}
export declare class CloudsearchIndexingDatasourcesItemsDeleteQueueItemsResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
