import { SpeakeasyBase } from "../../../internal/utils";
import { MethodMap } from "./methodmap";
import { Options } from "./options";
/**
 * CollectionOverride allows resource handling overrides for specific resources within a BaseType
**/
export declare class CollectionOverride extends SpeakeasyBase {
    collection?: string;
    methodMap?: MethodMap;
    options?: Options;
}
