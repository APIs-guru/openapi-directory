import { SpeakeasyBase } from "../../../internal/utils";
import { SnapshotImage } from "./snapshotimage";
export declare enum SnapshotTypeEnum {
    SnapshotTypeUnspecified = "SNAPSHOT_TYPE_UNSPECIFIED",
    SaveGame = "SAVE_GAME"
}
/**
 * An snapshot object.
**/
export declare class Snapshot extends SpeakeasyBase {
    coverImage?: SnapshotImage;
    description?: string;
    driveId?: string;
    durationMillis?: string;
    id?: string;
    kind?: string;
    lastModifiedMillis?: string;
    progressValue?: string;
    title?: string;
    type?: SnapshotTypeEnum;
    uniqueName?: string;
}
