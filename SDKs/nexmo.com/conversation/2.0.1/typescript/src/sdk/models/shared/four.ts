import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Four
/** 
 * Connect to a VBC extension
**/
export class Four extends SpeakeasyBase {
  @Metadata({ data: "json, name=extension" })
  extension: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
