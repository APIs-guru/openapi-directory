import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DriveExportOptions
/** 
 * Options for Drive exports.
**/
export class DriveExportOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includeAccessInfo" })
  includeAccessInfo?: boolean;
}
