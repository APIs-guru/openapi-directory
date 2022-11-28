import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProdTtSasportalNodesNodesNodesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ProdTtSasportalNodesNodesNodesListQueryParams extends SpeakeasyBase {
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
export declare class ProdTtSasportalNodesNodesNodesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProdTtSasportalNodesNodesNodesListRequest extends SpeakeasyBase {
    pathParams: ProdTtSasportalNodesNodesNodesListPathParams;
    queryParams: ProdTtSasportalNodesNodesNodesListQueryParams;
    security: ProdTtSasportalNodesNodesNodesListSecurity;
}
export declare class ProdTtSasportalNodesNodesNodesListResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalListNodesResponse?: shared.SasPortalListNodesResponse;
    statusCode: number;
}
