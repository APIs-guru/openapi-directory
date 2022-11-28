import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArrayValue } from "./arrayvalue";
import { Entity } from "./entity";
import { LatLng } from "./latlng";
import { Key } from "./key";


export enum ValueNullValueEnum {
    NullValue = "NULL_VALUE"
}


// Value
/** 
 * A message that can hold any of the supported value types and associated metadata.
**/
export class Value extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arrayValue" })
  arrayValue?: ArrayValue;

  @SpeakeasyMetadata({ data: "json, name=blobValue" })
  blobValue?: string;

  @SpeakeasyMetadata({ data: "json, name=booleanValue" })
  booleanValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @SpeakeasyMetadata({ data: "json, name=entityValue" })
  entityValue?: Entity;

  @SpeakeasyMetadata({ data: "json, name=excludeFromIndexes" })
  excludeFromIndexes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=geoPointValue" })
  geoPointValue?: LatLng;

  @SpeakeasyMetadata({ data: "json, name=integerValue" })
  integerValue?: string;

  @SpeakeasyMetadata({ data: "json, name=keyValue" })
  keyValue?: Key;

  @SpeakeasyMetadata({ data: "json, name=meaning" })
  meaning?: number;

  @SpeakeasyMetadata({ data: "json, name=nullValue" })
  nullValue?: ValueNullValueEnum;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;

  @SpeakeasyMetadata({ data: "json, name=timestampValue" })
  timestampValue?: string;
}
