import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RestoreInfoSourceTypeEnum } from "./restoreinfo";



// RestoreInfo1
/** 
 * Information about a table restore.
**/
export class RestoreInfo1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourceType" })
  sourceType?: RestoreInfoSourceTypeEnum;
}
