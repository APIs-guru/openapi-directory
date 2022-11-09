import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SharedDriveInfo
/** 
 * The shared drives to search
**/
export class SharedDriveInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=sharedDriveIds" })
  sharedDriveIds?: string[];
}
