import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsAnnotationStoresListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class HealthcareProjectsLocationsDatasetsAnnotationStoresListQueryParams extends SpeakeasyBase {
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
export declare class HealthcareProjectsLocationsDatasetsAnnotationStoresListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsAnnotationStoresListRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsAnnotationStoresListPathParams;
    queryParams: HealthcareProjectsLocationsDatasetsAnnotationStoresListQueryParams;
    security: HealthcareProjectsLocationsDatasetsAnnotationStoresListSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsAnnotationStoresListResponse extends SpeakeasyBase {
    contentType: string;
    listAnnotationStoresResponse?: shared.ListAnnotationStoresResponse;
    statusCode: number;
}
