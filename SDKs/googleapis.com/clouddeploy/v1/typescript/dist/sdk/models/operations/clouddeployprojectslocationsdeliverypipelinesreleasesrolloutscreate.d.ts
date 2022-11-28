import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    rolloutId?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateRequest extends SpeakeasyBase {
    pathParams: ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreatePathParams;
    queryParams: ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams;
    request?: shared.RolloutInput;
    security: ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateSecurity;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
