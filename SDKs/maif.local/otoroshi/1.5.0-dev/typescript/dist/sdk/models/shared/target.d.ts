import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Target is where an HTTP call will be forwarded in the end from a service domain
**/
export declare class Target extends SpeakeasyBase {
    host: string;
    scheme: string;
}
