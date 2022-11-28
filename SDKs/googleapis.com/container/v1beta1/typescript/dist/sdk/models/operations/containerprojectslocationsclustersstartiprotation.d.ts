import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsLocationsClustersStartIpRotationPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContainerProjectsLocationsClustersStartIpRotationQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsLocationsClustersStartIpRotationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsLocationsClustersStartIpRotationRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsLocationsClustersStartIpRotationPathParams;
    queryParams: ContainerProjectsLocationsClustersStartIpRotationQueryParams;
    request?: shared.StartIpRotationRequest;
    security: ContainerProjectsLocationsClustersStartIpRotationSecurity;
}
export declare class ContainerProjectsLocationsClustersStartIpRotationResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
