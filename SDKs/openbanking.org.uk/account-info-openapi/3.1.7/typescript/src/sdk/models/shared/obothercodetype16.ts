import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObOtherCodeType16
/** 
 * Other application frequencies not covered in the standard code list
**/
export class ObOtherCodeType16 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
