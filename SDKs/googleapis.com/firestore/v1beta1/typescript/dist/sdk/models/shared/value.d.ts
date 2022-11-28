import { SpeakeasyBase } from "../../../internal/utils";
import { ArrayValue } from "./arrayvalue";
import { LatLng } from "./latlng";
import { MapValue } from "./mapvalue";
export declare enum ValueNullValueEnum {
    NullValue = "NULL_VALUE"
}
/**
 * A message that can hold any of the supported value types.
**/
export declare class Value extends SpeakeasyBase {
    arrayValue?: ArrayValue;
    booleanValue?: boolean;
    bytesValue?: string;
    doubleValue?: number;
    geoPointValue?: LatLng;
    integerValue?: string;
    mapValue?: MapValue;
    nullValue?: ValueNullValueEnum;
    referenceValue?: string;
    stringValue?: string;
    timestampValue?: string;
}
