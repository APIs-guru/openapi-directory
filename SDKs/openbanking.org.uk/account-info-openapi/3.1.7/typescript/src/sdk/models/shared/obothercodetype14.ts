import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObOtherCodeType14
/** 
 * Other fee rate type code which is not available in the standard code set
**/
export class ObOtherCodeType14 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
