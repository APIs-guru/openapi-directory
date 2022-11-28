import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationPathParams;
    queryParams: ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationQueryParams;
}
export declare class ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    getOpenIdConfigResponse?: shared.GetOpenIdConfigResponse;
    statusCode: number;
}
