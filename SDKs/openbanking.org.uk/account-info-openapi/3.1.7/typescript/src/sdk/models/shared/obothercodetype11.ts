import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObOtherCodeType11
/** 
 * Other application frequencies that are not available in the standard code list
**/
export class ObOtherCodeType11 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
