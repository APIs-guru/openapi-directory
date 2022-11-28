import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunProjectsLocationsRoutesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RunProjectsLocationsRoutesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    continue?: string;
    fieldSelector?: string;
    fields?: string;
    includeUninitialized?: boolean;
    key?: string;
    labelSelector?: string;
    limit?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    resourceVersion?: string;
    uploadType?: string;
    uploadProtocol?: string;
    watch?: boolean;
}
export declare class RunProjectsLocationsRoutesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunProjectsLocationsRoutesListRequest extends SpeakeasyBase {
    pathParams: RunProjectsLocationsRoutesListPathParams;
    queryParams: RunProjectsLocationsRoutesListQueryParams;
    security: RunProjectsLocationsRoutesListSecurity;
}
export declare class RunProjectsLocationsRoutesListResponse extends SpeakeasyBase {
    contentType: string;
    listRoutesResponse?: shared.ListRoutesResponse;
    statusCode: number;
}
