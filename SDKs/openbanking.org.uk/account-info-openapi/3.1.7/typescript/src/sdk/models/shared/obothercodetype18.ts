import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObOtherCodeType18
/** 
 * Other fee rate type which is not available in the standard code set
**/
export class ObOtherCodeType18 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
