import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsLocationsClustersCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ContainerProjectsLocationsClustersCreateQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsLocationsClustersCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsLocationsClustersCreateRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsLocationsClustersCreatePathParams;
    queryParams: ContainerProjectsLocationsClustersCreateQueryParams;
    request?: shared.CreateClusterRequestInput;
    security: ContainerProjectsLocationsClustersCreateSecurity;
}
export declare class ContainerProjectsLocationsClustersCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
