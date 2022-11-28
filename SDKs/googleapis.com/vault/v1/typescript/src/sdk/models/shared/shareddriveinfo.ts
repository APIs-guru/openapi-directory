import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SharedDriveInfo
/** 
 * The shared drives to search
**/
export class SharedDriveInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sharedDriveIds" })
  sharedDriveIds?: string[];
}
