import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SasportalNodesNodesNodesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SasportalNodesNodesNodesListQueryParams extends SpeakeasyBase {
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
export declare class SasportalNodesNodesNodesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SasportalNodesNodesNodesListRequest extends SpeakeasyBase {
    pathParams: SasportalNodesNodesNodesListPathParams;
    queryParams: SasportalNodesNodesNodesListQueryParams;
    security: SasportalNodesNodesNodesListSecurity;
}
export declare class SasportalNodesNodesNodesListResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalListNodesResponse?: shared.SasPortalListNodesResponse;
    statusCode: number;
}
