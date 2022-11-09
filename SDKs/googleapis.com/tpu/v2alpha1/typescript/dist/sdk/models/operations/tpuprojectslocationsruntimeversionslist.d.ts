import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TpuProjectsLocationsRuntimeVersionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TpuProjectsLocationsRuntimeVersionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TpuProjectsLocationsRuntimeVersionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TpuProjectsLocationsRuntimeVersionsListRequest extends SpeakeasyBase {
    pathParams: TpuProjectsLocationsRuntimeVersionsListPathParams;
    queryParams: TpuProjectsLocationsRuntimeVersionsListQueryParams;
    security: TpuProjectsLocationsRuntimeVersionsListSecurity;
}
export declare class TpuProjectsLocationsRuntimeVersionsListResponse extends SpeakeasyBase {
    contentType: string;
    listRuntimeVersionsResponse?: shared.ListRuntimeVersionsResponse;
    statusCode: number;
}
