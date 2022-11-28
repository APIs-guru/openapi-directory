import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConfigurationSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetConfigurationRequest extends SpeakeasyBase {
    security: GetConfigurationSecurity;
}
export declare class GetConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    serverConfiguration?: shared.ServerConfiguration;
    statusCode: number;
}
