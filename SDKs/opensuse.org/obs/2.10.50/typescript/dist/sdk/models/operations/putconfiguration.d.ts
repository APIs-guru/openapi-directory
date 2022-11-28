import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutConfigurationSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class PutConfigurationRequest extends SpeakeasyBase {
    request?: Uint8Array;
    security: PutConfigurationSecurity;
}
export declare class PutConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
