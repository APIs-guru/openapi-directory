import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobPathParams extends SpeakeasyBase {
    rollout: string;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobQueryParams extends SpeakeasyBase {
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
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobRequest extends SpeakeasyBase {
    pathParams: ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobPathParams;
    queryParams: ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobQueryParams;
    request?: shared.RetryJobRequest;
    security: ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobSecurity;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobResponse extends SpeakeasyBase {
    contentType: string;
    retryJobResponse?: Map<string, any>;
    statusCode: number;
}
