import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GkebackupProjectsLocationsDeleteOperationsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GkebackupProjectsLocationsDeleteOperationsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GkebackupProjectsLocationsDeleteOperationsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkebackupProjectsLocationsDeleteOperationsRequest extends SpeakeasyBase {
    pathParams: GkebackupProjectsLocationsDeleteOperationsPathParams;
    queryParams: GkebackupProjectsLocationsDeleteOperationsQueryParams;
    security: GkebackupProjectsLocationsDeleteOperationsSecurity;
}
export declare class GkebackupProjectsLocationsDeleteOperationsResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
