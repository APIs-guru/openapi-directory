import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsAnnotationStoresCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class HealthcareProjectsLocationsDatasetsAnnotationStoresCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    annotationStoreId?: string;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class HealthcareProjectsLocationsDatasetsAnnotationStoresCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsAnnotationStoresCreateRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsAnnotationStoresCreatePathParams;
    queryParams: HealthcareProjectsLocationsDatasetsAnnotationStoresCreateQueryParams;
    request?: shared.AnnotationStore;
    security: HealthcareProjectsLocationsDatasetsAnnotationStoresCreateSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsAnnotationStoresCreateResponse extends SpeakeasyBase {
    annotationStore?: shared.AnnotationStore;
    contentType: string;
    statusCode: number;
}
