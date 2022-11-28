import { SpeakeasyBase } from "../../../internal/utils";
import { ArrayValue } from "./arrayvalue";
import { Entity } from "./entity";
import { LatLng } from "./latlng";
import { Key } from "./key";
export declare enum ValueNullValueEnum {
    NullValue = "NULL_VALUE"
}
/**
 * A message that can hold any of the supported value types and associated metadata.
**/
export declare class Value extends SpeakeasyBase {
    arrayValue?: ArrayValue;
    blobValue?: string;
    booleanValue?: boolean;
    doubleValue?: number;
    entityValue?: Entity;
    excludeFromIndexes?: boolean;
    geoPointValue?: LatLng;
    integerValue?: string;
    keyValue?: Key;
    meaning?: number;
    nullValue?: ValueNullValueEnum;
    stringValue?: string;
    timestampValue?: string;
}
