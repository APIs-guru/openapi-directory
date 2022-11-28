import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BackupInfo
/** 
 * Information about a backup.
**/
export class BackupInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backup" })
  backup?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceDatabase" })
  sourceDatabase?: string;

  @SpeakeasyMetadata({ data: "json, name=versionTime" })
  versionTime?: string;
}
