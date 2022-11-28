import { SpeakeasyBase } from "../../../internal/utils";
import { PageElementProperties } from "./pageelementproperties";
export declare enum CreateVideoRequestSourceEnum {
    SourceUnspecified = "SOURCE_UNSPECIFIED",
    Youtube = "YOUTUBE",
    Drive = "DRIVE"
}
/**
 * Creates a video. NOTE: Creating a video from Google Drive requires that the requesting app have at least one of the drive, drive.readonly, or drive.file OAuth scopes.
**/
export declare class CreateVideoRequest extends SpeakeasyBase {
    elementProperties?: PageElementProperties;
    id?: string;
    objectId?: string;
    source?: CreateVideoRequestSourceEnum;
}
