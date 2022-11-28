import { SpeakeasyBase } from "../../../internal/utils";
import { Hash } from "./hash";
/**
 * An entity that can have metadata. For example, a Docker image.
**/
export declare class Resource extends SpeakeasyBase {
    contentHash?: Hash;
    name?: string;
    uri?: string;
}
