import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsLocationsClustersSetLegacyAbacPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContainerProjectsLocationsClustersSetLegacyAbacQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsLocationsClustersSetLegacyAbacSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsLocationsClustersSetLegacyAbacRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsLocationsClustersSetLegacyAbacPathParams;
    queryParams: ContainerProjectsLocationsClustersSetLegacyAbacQueryParams;
    request?: shared.SetLegacyAbacRequest;
    security: ContainerProjectsLocationsClustersSetLegacyAbacSecurity;
}
export declare class ContainerProjectsLocationsClustersSetLegacyAbacResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
