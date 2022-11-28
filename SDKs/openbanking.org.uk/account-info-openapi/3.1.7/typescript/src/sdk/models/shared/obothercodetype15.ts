import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObOtherCodeType15
/** 
 * Other fee rate type which is not in the standard rate type list
**/
export class ObOtherCodeType15 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
