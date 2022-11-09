import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DatapipelinesProjectsLocationsPipelinesRunPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatapipelinesProjectsLocationsPipelinesRunQueryParams extends SpeakeasyBase {
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
export declare class DatapipelinesProjectsLocationsPipelinesRunSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatapipelinesProjectsLocationsPipelinesRunRequest extends SpeakeasyBase {
    pathParams: DatapipelinesProjectsLocationsPipelinesRunPathParams;
    queryParams: DatapipelinesProjectsLocationsPipelinesRunQueryParams;
    request?: Map<string, any>;
    security: DatapipelinesProjectsLocationsPipelinesRunSecurity;
}
export declare class DatapipelinesProjectsLocationsPipelinesRunResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatapipelinesV1RunPipelineResponse?: shared.GoogleCloudDatapipelinesV1RunPipelineResponse;
    statusCode: number;
}
