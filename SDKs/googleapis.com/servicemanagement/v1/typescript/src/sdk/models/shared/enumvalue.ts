import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Option } from "./option";



// EnumValue
/** 
 * Enum value definition.
**/
export class EnumValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: number;

  @SpeakeasyMetadata({ data: "json, name=options", elemType: Option })
  options?: Option[];
}
