import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsLocationsClustersCompleteIpRotationPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContainerProjectsLocationsClustersCompleteIpRotationQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsLocationsClustersCompleteIpRotationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsLocationsClustersCompleteIpRotationRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsLocationsClustersCompleteIpRotationPathParams;
    queryParams: ContainerProjectsLocationsClustersCompleteIpRotationQueryParams;
    request?: shared.CompleteIpRotationRequest;
    security: ContainerProjectsLocationsClustersCompleteIpRotationSecurity;
}
export declare class ContainerProjectsLocationsClustersCompleteIpRotationResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
