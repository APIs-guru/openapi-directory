import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BackupInfo
/** 
 * Information about a backup.
**/
export class BackupInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=backup" })
  backup?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=sourceDatabase" })
  sourceDatabase?: string;

  @Metadata({ data: "json, name=versionTime" })
  versionTime?: string;
}
