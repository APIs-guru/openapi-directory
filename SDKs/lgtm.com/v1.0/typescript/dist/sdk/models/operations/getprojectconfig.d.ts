import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectConfigPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare enum GetProjectConfigSourceEnum {
    Repository = "repository",
    Administrator = "administrator"
}
export declare class GetProjectConfigQueryParams extends SpeakeasyBase {
    source?: GetProjectConfigSourceEnum;
}
export declare class GetProjectConfigSecurity extends SpeakeasyBase {
    accessToken: shared.SchemeAccessToken;
}
export declare class GetProjectConfigRequest extends SpeakeasyBase {
    pathParams: GetProjectConfigPathParams;
    queryParams: GetProjectConfigQueryParams;
    security: GetProjectConfigSecurity;
}
export declare class GetProjectConfigResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getProjectConfig400ApplicationJsonObject?: Map<string, any>;
}
