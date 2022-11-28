import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatalabelingProjectsDatasetsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatalabelingProjectsDatasetsCreateQueryParams extends SpeakeasyBase {
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
export declare class DatalabelingProjectsDatasetsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatalabelingProjectsDatasetsCreateRequest extends SpeakeasyBase {
    pathParams: DatalabelingProjectsDatasetsCreatePathParams;
    queryParams: DatalabelingProjectsDatasetsCreateQueryParams;
    request?: shared.GoogleCloudDatalabelingV1beta1CreateDatasetRequest;
    security: DatalabelingProjectsDatasetsCreateSecurity;
}
export declare class DatalabelingProjectsDatasetsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatalabelingV1beta1Dataset?: shared.GoogleCloudDatalabelingV1beta1Dataset;
    statusCode: number;
}
