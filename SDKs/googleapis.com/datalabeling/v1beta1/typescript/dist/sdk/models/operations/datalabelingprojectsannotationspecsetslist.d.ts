import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatalabelingProjectsAnnotationSpecSetsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatalabelingProjectsAnnotationSpecSetsListQueryParams extends SpeakeasyBase {
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
export declare class DatalabelingProjectsAnnotationSpecSetsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatalabelingProjectsAnnotationSpecSetsListRequest extends SpeakeasyBase {
    pathParams: DatalabelingProjectsAnnotationSpecSetsListPathParams;
    queryParams: DatalabelingProjectsAnnotationSpecSetsListQueryParams;
    security: DatalabelingProjectsAnnotationSpecSetsListSecurity;
}
export declare class DatalabelingProjectsAnnotationSpecSetsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse?: shared.GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse;
    statusCode: number;
}
