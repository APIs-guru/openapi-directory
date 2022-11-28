import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TpuProjectsLocationsNodesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TpuProjectsLocationsNodesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TpuProjectsLocationsNodesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TpuProjectsLocationsNodesListRequest extends SpeakeasyBase {
    pathParams: TpuProjectsLocationsNodesListPathParams;
    queryParams: TpuProjectsLocationsNodesListQueryParams;
    security: TpuProjectsLocationsNodesListSecurity;
}
export declare class TpuProjectsLocationsNodesListResponse extends SpeakeasyBase {
    contentType: string;
    listNodesResponse?: shared.ListNodesResponse;
    statusCode: number;
}
