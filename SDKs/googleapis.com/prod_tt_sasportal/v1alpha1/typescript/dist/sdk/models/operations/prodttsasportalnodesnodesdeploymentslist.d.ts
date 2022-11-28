import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProdTtSasportalNodesNodesDeploymentsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ProdTtSasportalNodesNodesDeploymentsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ProdTtSasportalNodesNodesDeploymentsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProdTtSasportalNodesNodesDeploymentsListRequest extends SpeakeasyBase {
    pathParams: ProdTtSasportalNodesNodesDeploymentsListPathParams;
    queryParams: ProdTtSasportalNodesNodesDeploymentsListQueryParams;
    security: ProdTtSasportalNodesNodesDeploymentsListSecurity;
}
export declare class ProdTtSasportalNodesNodesDeploymentsListResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalListDeploymentsResponse?: shared.SasPortalListDeploymentsResponse;
    statusCode: number;
}
