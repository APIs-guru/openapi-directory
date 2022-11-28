import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DoubleMatcher } from "./doublematcher";
import { ListMatcher } from "./listmatcher";
import { StringMatcher } from "./stringmatcher";



// ValueMatcher
/** 
 * Specifies the way to match a ProtobufWkt::Value. Primitive values and ListValue are supported. StructValue is not supported and is always not matched. [#next-free-field: 7]
**/
export class ValueMatcher extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boolMatch" })
  boolMatch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=doubleMatch" })
  doubleMatch?: DoubleMatcher;

  @SpeakeasyMetadata({ data: "json, name=listMatch" })
  listMatch?: ListMatcher;

  @SpeakeasyMetadata({ data: "json, name=nullMatch" })
  nullMatch?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=presentMatch" })
  presentMatch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=stringMatch" })
  stringMatch?: StringMatcher;
}
