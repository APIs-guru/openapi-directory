import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration for cors support
**/
export declare class CorsSettings extends SpeakeasyBase {
    allowCredentials: boolean;
    allowHeaders: string[];
    allowMethods: string[];
    allowOrigin: string;
    enabled: boolean;
    excludedPatterns: string[];
    exposeHeaders: string[];
    maxAge: number;
}
