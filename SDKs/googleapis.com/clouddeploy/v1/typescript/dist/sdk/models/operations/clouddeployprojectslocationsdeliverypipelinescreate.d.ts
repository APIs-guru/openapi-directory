import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouddeployProjectsLocationsDeliveryPipelinesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    deliveryPipelineId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest extends SpeakeasyBase {
    pathParams: ClouddeployProjectsLocationsDeliveryPipelinesCreatePathParams;
    queryParams: ClouddeployProjectsLocationsDeliveryPipelinesCreateQueryParams;
    request?: shared.DeliveryPipelineInput;
    security: ClouddeployProjectsLocationsDeliveryPipelinesCreateSecurity;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
