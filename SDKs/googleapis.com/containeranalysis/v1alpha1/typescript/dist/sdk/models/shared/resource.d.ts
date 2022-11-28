import { SpeakeasyBase } from "../../../internal/utils";
import { Hash } from "./hash";
/**
 *  Resource is an entity that can have metadata. E.g., a Docker image.
**/
export declare class Resource extends SpeakeasyBase {
    contentHash?: Hash;
    name?: string;
    uri?: string;
}
