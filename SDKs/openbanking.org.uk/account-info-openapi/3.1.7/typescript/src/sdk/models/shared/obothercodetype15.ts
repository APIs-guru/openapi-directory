import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObOtherCodeType15
/** 
 * Other fee rate type which is not in the standard rate type list
**/
export class ObOtherCodeType15 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
