import { SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyResourceFileGcs } from "./ospolicyresourcefilegcs";
import { OsPolicyResourceFileRemote } from "./ospolicyresourcefileremote";
/**
 * A remote or local file.
**/
export declare class OsPolicyResourceFile extends SpeakeasyBase {
    allowInsecure?: boolean;
    gcs?: OsPolicyResourceFileGcs;
    localPath?: string;
    remote?: OsPolicyResourceFileRemote;
}
