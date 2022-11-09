import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObOtherCodeType16
/** 
 * Other application frequencies not covered in the standard code list
**/
export class ObOtherCodeType16 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
