import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsLocationsGetServerConfigPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContainerProjectsLocationsGetServerConfigQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projectId?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    zone?: string;
}
export declare class ContainerProjectsLocationsGetServerConfigSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsLocationsGetServerConfigRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsLocationsGetServerConfigPathParams;
    queryParams: ContainerProjectsLocationsGetServerConfigQueryParams;
    security: ContainerProjectsLocationsGetServerConfigSecurity;
}
export declare class ContainerProjectsLocationsGetServerConfigResponse extends SpeakeasyBase {
    contentType: string;
    serverConfig?: shared.ServerConfig;
    statusCode: number;
}
