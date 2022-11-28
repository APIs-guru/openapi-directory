import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings for a JWK set
**/
export declare class JwksAlgoSettings extends SpeakeasyBase {
    headers?: Map<string, string>;
    kty?: string;
    timeout?: number;
    ttl?: number;
    type: string;
    url?: string;
}
