import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DriveExportOptions
/** 
 * Options for Drive exports.
**/
export class DriveExportOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=includeAccessInfo" })
  includeAccessInfo?: boolean;
}
