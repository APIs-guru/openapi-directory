import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObOtherCodeType13
/** 
 * Other Fee type which is not available in the standard code set
**/
export class ObOtherCodeType13 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
