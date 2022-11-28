import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNamedConfigurationPathParams extends SpeakeasyBase {
    key: string;
}
export declare class GetNamedConfigurationSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetNamedConfigurationRequest extends SpeakeasyBase {
    pathParams: GetNamedConfigurationPathParams;
    security: GetNamedConfigurationSecurity;
}
export declare class GetNamedConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    getNamedConfiguration200ApplicationJsonBinaryString?: Uint8Array;
    statusCode: number;
}
