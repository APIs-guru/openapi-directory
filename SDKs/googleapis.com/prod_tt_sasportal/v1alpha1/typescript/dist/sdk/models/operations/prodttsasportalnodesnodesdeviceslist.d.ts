import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProdTtSasportalNodesNodesDevicesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ProdTtSasportalNodesNodesDevicesListQueryParams extends SpeakeasyBase {
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
export declare class ProdTtSasportalNodesNodesDevicesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProdTtSasportalNodesNodesDevicesListRequest extends SpeakeasyBase {
    pathParams: ProdTtSasportalNodesNodesDevicesListPathParams;
    queryParams: ProdTtSasportalNodesNodesDevicesListQueryParams;
    security: ProdTtSasportalNodesNodesDevicesListSecurity;
}
export declare class ProdTtSasportalNodesNodesDevicesListResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalListDevicesResponse?: shared.SasPortalListDevicesResponse;
    statusCode: number;
}
