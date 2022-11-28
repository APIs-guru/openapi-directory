import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObOtherCodeType11
/** 
 * Other application frequencies that are not available in the standard code list
**/
export class ObOtherCodeType11 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
