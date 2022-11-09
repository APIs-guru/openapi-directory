import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SnapshotImage } from "./snapshotimage";

export enum SnapshotTypeEnum {
    SnapshotTypeUnspecified = "SNAPSHOT_TYPE_UNSPECIFIED"
,    SaveGame = "SAVE_GAME"
}


// Snapshot
/** 
 * An snapshot object.
**/
export class Snapshot extends SpeakeasyBase {
  @Metadata({ data: "json, name=coverImage" })
  coverImage?: SnapshotImage;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=driveId" })
  driveId?: string;

  @Metadata({ data: "json, name=durationMillis" })
  durationMillis?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lastModifiedMillis" })
  lastModifiedMillis?: string;

  @Metadata({ data: "json, name=progressValue" })
  progressValue?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: SnapshotTypeEnum;

  @Metadata({ data: "json, name=uniqueName" })
  uniqueName?: string;
}
