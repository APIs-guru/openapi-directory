import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonQueryParams extends SpeakeasyBase {
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
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonRequest extends SpeakeasyBase {
    pathParams: ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonPathParams;
    queryParams: ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonQueryParams;
    request?: Map<string, any>;
    security: ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonSecurity;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonResponse extends SpeakeasyBase {
    abandonReleaseResponse?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
