import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnumOption
/** 
 * EnumOption definition
**/
export class EnumOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
