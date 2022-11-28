import { SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";
/**
 * An individual service. A service contains a name and optional metadata. A service must exist before endpoints can be added to it.
**/
export declare class Service extends SpeakeasyBase {
    annotations?: Map<string, string>;
    endpoints?: Endpoint[];
    name?: string;
    uid?: string;
}
/**
 * An individual service. A service contains a name and optional metadata. A service must exist before endpoints can be added to it.
**/
export declare class ServiceInput extends SpeakeasyBase {
    annotations?: Map<string, string>;
    name?: string;
}
