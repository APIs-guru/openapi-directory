import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastreamProjectsLocationsFetchStaticIpsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatastreamProjectsLocationsFetchStaticIpsQueryParams extends SpeakeasyBase {
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
export declare class DatastreamProjectsLocationsFetchStaticIpsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastreamProjectsLocationsFetchStaticIpsRequest extends SpeakeasyBase {
    pathParams: DatastreamProjectsLocationsFetchStaticIpsPathParams;
    queryParams: DatastreamProjectsLocationsFetchStaticIpsQueryParams;
    security: DatastreamProjectsLocationsFetchStaticIpsSecurity;
}
export declare class DatastreamProjectsLocationsFetchStaticIpsResponse extends SpeakeasyBase {
    contentType: string;
    fetchStaticIpsResponse?: shared.FetchStaticIpsResponse;
    statusCode: number;
}
