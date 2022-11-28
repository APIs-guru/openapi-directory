import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoDoubleArray } from "./enterprisecrmeventbusprotodoublearray";
import { EnterpriseCrmEventbusProtoIntArray } from "./enterprisecrmeventbusprotointarray";
import { EnterpriseCrmEventbusProtoStringArray } from "./enterprisecrmeventbusprotostringarray";
/**
 * Used for define type for values. Currently supported value types include int, string, double, array, and any proto message.
**/
export declare class EnterpriseCrmEventbusProtoValueType extends SpeakeasyBase {
    booleanValue?: boolean;
    doubleArray?: EnterpriseCrmEventbusProtoDoubleArray;
    doubleValue?: number;
    intArray?: EnterpriseCrmEventbusProtoIntArray;
    intValue?: string;
    protoValue?: Map<string, any>;
    stringArray?: EnterpriseCrmEventbusProtoStringArray;
    stringValue?: string;
}
