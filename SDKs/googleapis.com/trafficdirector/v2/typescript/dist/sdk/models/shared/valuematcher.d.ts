import { SpeakeasyBase } from "../../../internal/utils";
import { DoubleMatcher } from "./doublematcher";
import { ListMatcher } from "./listmatcher";
import { StringMatcher } from "./stringmatcher";
/**
 * Specifies the way to match a ProtobufWkt::Value. Primitive values and ListValue are supported. StructValue is not supported and is always not matched. [#next-free-field: 7]
**/
export declare class ValueMatcher extends SpeakeasyBase {
    boolMatch?: boolean;
    doubleMatch?: DoubleMatcher;
    listMatch?: ListMatcher;
    nullMatch?: Map<string, any>;
    presentMatch?: boolean;
    stringMatch?: StringMatcher;
}
