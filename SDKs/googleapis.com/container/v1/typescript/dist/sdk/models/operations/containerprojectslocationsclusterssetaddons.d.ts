import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsLocationsClustersSetAddonsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContainerProjectsLocationsClustersSetAddonsQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsLocationsClustersSetAddonsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsLocationsClustersSetAddonsRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsLocationsClustersSetAddonsPathParams;
    queryParams: ContainerProjectsLocationsClustersSetAddonsQueryParams;
    request?: shared.SetAddonsConfigRequest;
    security: ContainerProjectsLocationsClustersSetAddonsSecurity;
}
export declare class ContainerProjectsLocationsClustersSetAddonsResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
