import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunProjectsLocationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RunProjectsLocationsListQueryParams extends SpeakeasyBase {
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
export declare class RunProjectsLocationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunProjectsLocationsListRequest extends SpeakeasyBase {
    pathParams: RunProjectsLocationsListPathParams;
    queryParams: RunProjectsLocationsListQueryParams;
    security: RunProjectsLocationsListSecurity;
}
export declare class RunProjectsLocationsListResponse extends SpeakeasyBase {
    contentType: string;
    listLocationsResponse?: shared.ListLocationsResponse;
    statusCode: number;
}
