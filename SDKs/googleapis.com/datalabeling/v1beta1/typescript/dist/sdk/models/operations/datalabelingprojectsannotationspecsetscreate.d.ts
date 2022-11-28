import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatalabelingProjectsAnnotationSpecSetsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatalabelingProjectsAnnotationSpecSetsCreateQueryParams extends SpeakeasyBase {
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
export declare class DatalabelingProjectsAnnotationSpecSetsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatalabelingProjectsAnnotationSpecSetsCreateRequest extends SpeakeasyBase {
    pathParams: DatalabelingProjectsAnnotationSpecSetsCreatePathParams;
    queryParams: DatalabelingProjectsAnnotationSpecSetsCreateQueryParams;
    request?: shared.GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest;
    security: DatalabelingProjectsAnnotationSpecSetsCreateSecurity;
}
export declare class DatalabelingProjectsAnnotationSpecSetsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatalabelingV1beta1AnnotationSpecSet?: shared.GoogleCloudDatalabelingV1beta1AnnotationSpecSet;
    statusCode: number;
}
