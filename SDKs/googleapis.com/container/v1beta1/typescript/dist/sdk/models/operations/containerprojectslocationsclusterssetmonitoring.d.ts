import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsLocationsClustersSetMonitoringPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContainerProjectsLocationsClustersSetMonitoringQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsLocationsClustersSetMonitoringSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsLocationsClustersSetMonitoringRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsLocationsClustersSetMonitoringPathParams;
    queryParams: ContainerProjectsLocationsClustersSetMonitoringQueryParams;
    request?: shared.SetMonitoringServiceRequest;
    security: ContainerProjectsLocationsClustersSetMonitoringSecurity;
}
export declare class ContainerProjectsLocationsClustersSetMonitoringResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
