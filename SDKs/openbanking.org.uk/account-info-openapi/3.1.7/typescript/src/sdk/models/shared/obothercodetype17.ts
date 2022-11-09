import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObOtherCodeType17
/** 
 * Other calculation frequency which is not available in standard code set.
**/
export class ObOtherCodeType17 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
