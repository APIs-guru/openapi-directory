import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateNamedConfigurationPathParams extends SpeakeasyBase {
    key: string;
}
export declare class UpdateNamedConfigurationSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class UpdateNamedConfigurationRequest extends SpeakeasyBase {
    pathParams: UpdateNamedConfigurationPathParams;
    security: UpdateNamedConfigurationSecurity;
}
export declare class UpdateNamedConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
