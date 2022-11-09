import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Option } from "./option";


// EnumValue
/** 
 * Enum value definition.
**/
export class EnumValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=number" })
  number?: number;

  @Metadata({ data: "json, name=options", elemType: shared.Option })
  options?: Option[];
}
