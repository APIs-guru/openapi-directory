import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnumOption
/** 
 * EnumOption definition
**/
export class EnumOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;
}
