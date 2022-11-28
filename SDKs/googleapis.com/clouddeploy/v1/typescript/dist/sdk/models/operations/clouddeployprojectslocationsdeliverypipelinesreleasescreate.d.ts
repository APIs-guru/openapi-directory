import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    releaseId?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateRequest extends SpeakeasyBase {
    pathParams: ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreatePathParams;
    queryParams: ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateQueryParams;
    request?: shared.ReleaseInput;
    security: ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateSecurity;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
