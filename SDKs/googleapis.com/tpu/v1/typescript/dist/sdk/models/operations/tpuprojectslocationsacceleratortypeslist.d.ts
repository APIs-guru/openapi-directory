import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TpuProjectsLocationsAcceleratorTypesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TpuProjectsLocationsAcceleratorTypesListQueryParams extends SpeakeasyBase {
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
export declare class TpuProjectsLocationsAcceleratorTypesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TpuProjectsLocationsAcceleratorTypesListRequest extends SpeakeasyBase {
    pathParams: TpuProjectsLocationsAcceleratorTypesListPathParams;
    queryParams: TpuProjectsLocationsAcceleratorTypesListQueryParams;
    security: TpuProjectsLocationsAcceleratorTypesListSecurity;
}
export declare class TpuProjectsLocationsAcceleratorTypesListResponse extends SpeakeasyBase {
    contentType: string;
    listAcceleratorTypesResponse?: shared.ListAcceleratorTypesResponse;
    statusCode: number;
}
