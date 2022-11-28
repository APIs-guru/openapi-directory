import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Define a parameter's name and location. The parameter may be passed as either an HTTP header or a URL query parameter, and if both are passed the behavior is implementation-dependent.
**/
export declare class SystemParameter extends SpeakeasyBase {
    httpHeader?: string;
    name?: string;
    urlQueryParameter?: string;
}
