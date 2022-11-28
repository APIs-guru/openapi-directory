import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LifesciencesProjectsLocationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class LifesciencesProjectsLocationsListQueryParams extends SpeakeasyBase {
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
export declare class LifesciencesProjectsLocationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LifesciencesProjectsLocationsListRequest extends SpeakeasyBase {
    pathParams: LifesciencesProjectsLocationsListPathParams;
    queryParams: LifesciencesProjectsLocationsListQueryParams;
    security: LifesciencesProjectsLocationsListSecurity;
}
export declare class LifesciencesProjectsLocationsListResponse extends SpeakeasyBase {
    contentType: string;
    listLocationsResponse?: shared.ListLocationsResponse;
    statusCode: number;
}
