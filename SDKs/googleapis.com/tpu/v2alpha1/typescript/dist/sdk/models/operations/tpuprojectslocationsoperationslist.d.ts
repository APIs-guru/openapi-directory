import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TpuProjectsLocationsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class TpuProjectsLocationsOperationsListQueryParams extends SpeakeasyBase {
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
export declare class TpuProjectsLocationsOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TpuProjectsLocationsOperationsListRequest extends SpeakeasyBase {
    pathParams: TpuProjectsLocationsOperationsListPathParams;
    queryParams: TpuProjectsLocationsOperationsListQueryParams;
    security: TpuProjectsLocationsOperationsListSecurity;
}
export declare class TpuProjectsLocationsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
