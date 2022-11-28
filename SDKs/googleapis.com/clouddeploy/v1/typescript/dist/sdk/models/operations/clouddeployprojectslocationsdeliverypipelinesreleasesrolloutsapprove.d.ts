import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApprovePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveQueryParams extends SpeakeasyBase {
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
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveRequest extends SpeakeasyBase {
    pathParams: ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApprovePathParams;
    queryParams: ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveQueryParams;
    request?: shared.ApproveRolloutRequest;
    security: ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveSecurity;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveResponse extends SpeakeasyBase {
    approveRolloutResponse?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
