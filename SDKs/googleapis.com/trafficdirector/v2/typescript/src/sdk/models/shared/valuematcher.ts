import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DoubleMatcher } from "./doublematcher";
import { ListMatcher } from "./listmatcher";
import { StringMatcher } from "./stringmatcher";


// ValueMatcher
/** 
 * Specifies the way to match a ProtobufWkt::Value. Primitive values and ListValue are supported. StructValue is not supported and is always not matched. [#next-free-field: 7]
**/
export class ValueMatcher extends SpeakeasyBase {
  @Metadata({ data: "json, name=boolMatch" })
  boolMatch?: boolean;

  @Metadata({ data: "json, name=doubleMatch" })
  doubleMatch?: DoubleMatcher;

  @Metadata({ data: "json, name=listMatch" })
  listMatch?: ListMatcher;

  @Metadata({ data: "json, name=nullMatch" })
  nullMatch?: Map<string, any>;

  @Metadata({ data: "json, name=presentMatch" })
  presentMatch?: boolean;

  @Metadata({ data: "json, name=stringMatch" })
  stringMatch?: StringMatcher;
}
