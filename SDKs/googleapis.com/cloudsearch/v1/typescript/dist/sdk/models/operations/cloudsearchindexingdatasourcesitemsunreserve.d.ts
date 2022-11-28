import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchIndexingDatasourcesItemsUnreservePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsearchIndexingDatasourcesItemsUnreserveQueryParams extends SpeakeasyBase {
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
export declare class CloudsearchIndexingDatasourcesItemsUnreserveSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchIndexingDatasourcesItemsUnreserveSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchIndexingDatasourcesItemsUnreserveSecurity extends SpeakeasyBase {
    option1?: CloudsearchIndexingDatasourcesItemsUnreserveSecurityOption1;
    option2?: CloudsearchIndexingDatasourcesItemsUnreserveSecurityOption2;
}
export declare class CloudsearchIndexingDatasourcesItemsUnreserveRequest extends SpeakeasyBase {
    pathParams: CloudsearchIndexingDatasourcesItemsUnreservePathParams;
    queryParams: CloudsearchIndexingDatasourcesItemsUnreserveQueryParams;
    request?: shared.UnreserveItemsRequest;
    security: CloudsearchIndexingDatasourcesItemsUnreserveSecurity;
}
export declare class CloudsearchIndexingDatasourcesItemsUnreserveResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
