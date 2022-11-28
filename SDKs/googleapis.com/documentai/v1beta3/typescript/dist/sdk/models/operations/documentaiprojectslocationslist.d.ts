import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocumentaiProjectsLocationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DocumentaiProjectsLocationsListQueryParams extends SpeakeasyBase {
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
export declare class DocumentaiProjectsLocationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocumentaiProjectsLocationsListRequest extends SpeakeasyBase {
    pathParams: DocumentaiProjectsLocationsListPathParams;
    queryParams: DocumentaiProjectsLocationsListQueryParams;
    security: DocumentaiProjectsLocationsListSecurity;
}
export declare class DocumentaiProjectsLocationsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudLocationListLocationsResponse?: shared.GoogleCloudLocationListLocationsResponse;
    statusCode: number;
}
