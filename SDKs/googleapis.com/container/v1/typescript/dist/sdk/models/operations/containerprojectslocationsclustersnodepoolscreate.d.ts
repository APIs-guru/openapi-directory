import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsLocationsClustersNodePoolsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ContainerProjectsLocationsClustersNodePoolsCreateQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsLocationsClustersNodePoolsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsLocationsClustersNodePoolsCreateRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsLocationsClustersNodePoolsCreatePathParams;
    queryParams: ContainerProjectsLocationsClustersNodePoolsCreateQueryParams;
    request?: shared.CreateNodePoolRequest;
    security: ContainerProjectsLocationsClustersNodePoolsCreateSecurity;
}
export declare class ContainerProjectsLocationsClustersNodePoolsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
