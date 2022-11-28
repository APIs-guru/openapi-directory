import { SpeakeasyBase } from "../../../internal/utils";
import { CompositeMedia } from "./compositemedia";
/**
 * # gdata.* are outside protos with mising documentation
**/
export declare class DiffChecksumsResponse extends SpeakeasyBase {
    checksumsLocation?: CompositeMedia;
    chunkSizeBytes?: string;
    objectLocation?: CompositeMedia;
    objectSizeBytes?: string;
    objectVersion?: string;
}
