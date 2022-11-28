import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPluginImagePathParamsInput extends SpeakeasyBase {
    pluginId: string;
    version: shared.Version;
}
export declare class GetPluginImageSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetPluginImageRequest extends SpeakeasyBase {
    pathParams: GetPluginImagePathParamsInput;
    security: GetPluginImageSecurity;
}
export declare class GetPluginImageResponse extends SpeakeasyBase {
    contentType: string;
    getPluginImage200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
