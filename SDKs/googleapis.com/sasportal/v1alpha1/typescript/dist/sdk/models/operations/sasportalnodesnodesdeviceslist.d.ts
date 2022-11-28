import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SasportalNodesNodesDevicesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SasportalNodesNodesDevicesListQueryParams extends SpeakeasyBase {
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
export declare class SasportalNodesNodesDevicesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SasportalNodesNodesDevicesListRequest extends SpeakeasyBase {
    pathParams: SasportalNodesNodesDevicesListPathParams;
    queryParams: SasportalNodesNodesDevicesListQueryParams;
    security: SasportalNodesNodesDevicesListSecurity;
}
export declare class SasportalNodesNodesDevicesListResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalListDevicesResponse?: shared.SasPortalListDevicesResponse;
    statusCode: number;
}
