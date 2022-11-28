import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SasportalNodesNodesDeploymentsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SasportalNodesNodesDeploymentsListQueryParams extends SpeakeasyBase {
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
export declare class SasportalNodesNodesDeploymentsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SasportalNodesNodesDeploymentsListRequest extends SpeakeasyBase {
    pathParams: SasportalNodesNodesDeploymentsListPathParams;
    queryParams: SasportalNodesNodesDeploymentsListQueryParams;
    security: SasportalNodesNodesDeploymentsListSecurity;
}
export declare class SasportalNodesNodesDeploymentsListResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalListDeploymentsResponse?: shared.SasPortalListDeploymentsResponse;
    statusCode: number;
}
