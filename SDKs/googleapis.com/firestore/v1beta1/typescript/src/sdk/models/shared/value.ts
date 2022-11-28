import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArrayValue } from "./arrayvalue";
import { LatLng } from "./latlng";
import { MapValue } from "./mapvalue";


export enum ValueNullValueEnum {
    NullValue = "NULL_VALUE"
}


// Value
/** 
 * A message that can hold any of the supported value types.
**/
export class Value extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arrayValue" })
  arrayValue?: ArrayValue;

  @SpeakeasyMetadata({ data: "json, name=booleanValue" })
  booleanValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bytesValue" })
  bytesValue?: string;

  @SpeakeasyMetadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @SpeakeasyMetadata({ data: "json, name=geoPointValue" })
  geoPointValue?: LatLng;

  @SpeakeasyMetadata({ data: "json, name=integerValue" })
  integerValue?: string;

  @SpeakeasyMetadata({ data: "json, name=mapValue" })
  mapValue?: MapValue;

  @SpeakeasyMetadata({ data: "json, name=nullValue" })
  nullValue?: ValueNullValueEnum;

  @SpeakeasyMetadata({ data: "json, name=referenceValue" })
  referenceValue?: string;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;

  @SpeakeasyMetadata({ data: "json, name=timestampValue" })
  timestampValue?: string;
}
