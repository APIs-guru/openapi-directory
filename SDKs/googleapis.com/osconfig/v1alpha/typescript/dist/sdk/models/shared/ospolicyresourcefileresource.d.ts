import { SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyResourceFile } from "./ospolicyresourcefile";
export declare enum OsPolicyResourceFileResourceStateEnum {
    DesiredStateUnspecified = "DESIRED_STATE_UNSPECIFIED",
    Present = "PRESENT",
    Absent = "ABSENT",
    ContentsMatch = "CONTENTS_MATCH"
}
/**
 * A resource that manages the state of a file.
**/
export declare class OsPolicyResourceFileResource extends SpeakeasyBase {
    content?: string;
    file?: OsPolicyResourceFile;
    path?: string;
    permissions?: string;
    state?: OsPolicyResourceFileResourceStateEnum;
}
