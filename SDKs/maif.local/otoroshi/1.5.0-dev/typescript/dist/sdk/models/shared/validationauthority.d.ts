import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings to access a validation authority server
**/
export declare class ValidationAuthority extends SpeakeasyBase {
    alwaysValid: boolean;
    badTtl: number;
    description: string;
    goodTtl: number;
    headers: Map<string, string>;
    host: string;
    id: string;
    method: string;
    name: string;
    noCache: boolean;
    path: string;
    timeout: number;
    url: string;
}
