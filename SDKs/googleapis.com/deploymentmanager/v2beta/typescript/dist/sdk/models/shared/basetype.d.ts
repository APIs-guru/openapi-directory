import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CollectionOverride } from "./collectionoverride";
import { Credential } from "./credential";
import { Options } from "./options";
/**
 * BaseType that describes a service-backed Type.
**/
export declare class BaseType extends SpeakeasyBase {
    collectionOverrides?: CollectionOverride[];
    credential?: Credential;
    descriptorUrl?: string;
    options?: Options;
}
