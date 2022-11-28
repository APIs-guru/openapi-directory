import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchIndexingDatasourcesItemsIndexPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsearchIndexingDatasourcesItemsIndexQueryParams extends SpeakeasyBase {
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
export declare class CloudsearchIndexingDatasourcesItemsIndexSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchIndexingDatasourcesItemsIndexSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchIndexingDatasourcesItemsIndexSecurity extends SpeakeasyBase {
    option1?: CloudsearchIndexingDatasourcesItemsIndexSecurityOption1;
    option2?: CloudsearchIndexingDatasourcesItemsIndexSecurityOption2;
}
export declare class CloudsearchIndexingDatasourcesItemsIndexRequest extends SpeakeasyBase {
    pathParams: CloudsearchIndexingDatasourcesItemsIndexPathParams;
    queryParams: CloudsearchIndexingDatasourcesItemsIndexQueryParams;
    request?: shared.IndexItemRequest;
    security: CloudsearchIndexingDatasourcesItemsIndexSecurity;
}
export declare class CloudsearchIndexingDatasourcesItemsIndexResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
