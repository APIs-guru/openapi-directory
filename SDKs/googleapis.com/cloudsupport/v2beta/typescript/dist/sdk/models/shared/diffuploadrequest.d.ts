import { SpeakeasyBase } from "../../../internal/utils";
import { CompositeMedia } from "./compositemedia";
/**
 * # gdata.* are outside protos with mising documentation
**/
export declare class DiffUploadRequest extends SpeakeasyBase {
    checksumsInfo?: CompositeMedia;
    objectInfo?: CompositeMedia;
    objectVersion?: string;
}
