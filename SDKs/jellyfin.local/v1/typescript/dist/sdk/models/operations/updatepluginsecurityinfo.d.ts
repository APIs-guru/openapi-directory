import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePluginSecurityInfoRequests extends SpeakeasyBase {
    pluginSecurityInfo?: shared.PluginSecurityInfo;
    pluginSecurityInfo1?: shared.PluginSecurityInfo;
    pluginSecurityInfo2?: shared.PluginSecurityInfo;
}
export declare class UpdatePluginSecurityInfoSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class UpdatePluginSecurityInfoRequest extends SpeakeasyBase {
    request: UpdatePluginSecurityInfoRequests;
    security: UpdatePluginSecurityInfoSecurity;
}
export declare class UpdatePluginSecurityInfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
