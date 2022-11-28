import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SnapshotImage } from "./snapshotimage";


export enum SnapshotTypeEnum {
    SnapshotTypeUnspecified = "SNAPSHOT_TYPE_UNSPECIFIED",
    SaveGame = "SAVE_GAME"
}


// Snapshot
/** 
 * An snapshot object.
**/
export class Snapshot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coverImage" })
  coverImage?: SnapshotImage;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=driveId" })
  driveId?: string;

  @SpeakeasyMetadata({ data: "json, name=durationMillis" })
  durationMillis?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedMillis" })
  lastModifiedMillis?: string;

  @SpeakeasyMetadata({ data: "json, name=progressValue" })
  progressValue?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SnapshotTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uniqueName" })
  uniqueName?: string;
}
