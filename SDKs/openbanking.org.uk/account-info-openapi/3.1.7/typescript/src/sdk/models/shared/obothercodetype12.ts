import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObOtherCodeType12
/** 
 * Other calculation frequency which is not available in the standard code set.
**/
export class ObOtherCodeType12 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
