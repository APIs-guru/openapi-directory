import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchIndexingDatasourcesItemsPollPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsearchIndexingDatasourcesItemsPollQueryParams extends SpeakeasyBase {
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
export declare class CloudsearchIndexingDatasourcesItemsPollSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchIndexingDatasourcesItemsPollSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchIndexingDatasourcesItemsPollSecurity extends SpeakeasyBase {
    option1?: CloudsearchIndexingDatasourcesItemsPollSecurityOption1;
    option2?: CloudsearchIndexingDatasourcesItemsPollSecurityOption2;
}
export declare class CloudsearchIndexingDatasourcesItemsPollRequest extends SpeakeasyBase {
    pathParams: CloudsearchIndexingDatasourcesItemsPollPathParams;
    queryParams: CloudsearchIndexingDatasourcesItemsPollQueryParams;
    request?: shared.PollItemsRequest;
    security: CloudsearchIndexingDatasourcesItemsPollSecurity;
}
export declare class CloudsearchIndexingDatasourcesItemsPollResponse extends SpeakeasyBase {
    contentType: string;
    pollItemsResponse?: shared.PollItemsResponse;
    statusCode: number;
}
