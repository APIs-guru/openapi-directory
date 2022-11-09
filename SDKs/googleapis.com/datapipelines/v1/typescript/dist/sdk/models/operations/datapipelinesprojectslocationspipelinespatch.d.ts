import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DatapipelinesProjectsLocationsPipelinesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatapipelinesProjectsLocationsPipelinesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatapipelinesProjectsLocationsPipelinesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatapipelinesProjectsLocationsPipelinesPatchRequest extends SpeakeasyBase {
    pathParams: DatapipelinesProjectsLocationsPipelinesPatchPathParams;
    queryParams: DatapipelinesProjectsLocationsPipelinesPatchQueryParams;
    request?: shared.GoogleCloudDatapipelinesV1Pipeline;
    security: DatapipelinesProjectsLocationsPipelinesPatchSecurity;
}
export declare class DatapipelinesProjectsLocationsPipelinesPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatapipelinesV1Pipeline?: shared.GoogleCloudDatapipelinesV1Pipeline;
    statusCode: number;
}
