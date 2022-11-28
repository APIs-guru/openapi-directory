import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LifesciencesProjectsLocationsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class LifesciencesProjectsLocationsOperationsListQueryParams extends SpeakeasyBase {
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
export declare class LifesciencesProjectsLocationsOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LifesciencesProjectsLocationsOperationsListRequest extends SpeakeasyBase {
    pathParams: LifesciencesProjectsLocationsOperationsListPathParams;
    queryParams: LifesciencesProjectsLocationsOperationsListQueryParams;
    security: LifesciencesProjectsLocationsOperationsListSecurity;
}
export declare class LifesciencesProjectsLocationsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
