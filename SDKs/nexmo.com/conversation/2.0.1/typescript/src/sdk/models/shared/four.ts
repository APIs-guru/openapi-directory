import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Four
/** 
 * Connect to a VBC extension
**/
export class Four extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension" })
  extension: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
