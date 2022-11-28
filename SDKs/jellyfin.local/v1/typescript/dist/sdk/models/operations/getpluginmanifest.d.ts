import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPluginManifestPathParams extends SpeakeasyBase {
    pluginId: string;
}
export declare class GetPluginManifestSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetPluginManifestRequest extends SpeakeasyBase {
    pathParams: GetPluginManifestPathParams;
    security: GetPluginManifestSecurity;
}
export declare class GetPluginManifestResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
