import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FileProjectsLocationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FileProjectsLocationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    includeUnrevealedLocations?: boolean;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FileProjectsLocationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FileProjectsLocationsListRequest extends SpeakeasyBase {
    pathParams: FileProjectsLocationsListPathParams;
    queryParams: FileProjectsLocationsListQueryParams;
    security: FileProjectsLocationsListSecurity;
}
export declare class FileProjectsLocationsListResponse extends SpeakeasyBase {
    contentType: string;
    listLocationsResponse?: shared.ListLocationsResponse;
    statusCode: number;
}
