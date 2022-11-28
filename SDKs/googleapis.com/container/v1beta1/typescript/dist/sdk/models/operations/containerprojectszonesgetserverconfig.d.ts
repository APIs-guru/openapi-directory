import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsZonesGetServerconfigPathParams extends SpeakeasyBase {
    projectId: string;
    zone: string;
}
export declare class ContainerProjectsZonesGetServerconfigQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    name?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContainerProjectsZonesGetServerconfigSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsZonesGetServerconfigRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsZonesGetServerconfigPathParams;
    queryParams: ContainerProjectsZonesGetServerconfigQueryParams;
    security: ContainerProjectsZonesGetServerconfigSecurity;
}
export declare class ContainerProjectsZonesGetServerconfigResponse extends SpeakeasyBase {
    contentType: string;
    serverConfig?: shared.ServerConfig;
    statusCode: number;
}
