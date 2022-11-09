import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=arrayValue" })
  arrayValue?: ArrayValue;

  @Metadata({ data: "json, name=booleanValue" })
  booleanValue?: boolean;

  @Metadata({ data: "json, name=bytesValue" })
  bytesValue?: string;

  @Metadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @Metadata({ data: "json, name=geoPointValue" })
  geoPointValue?: LatLng;

  @Metadata({ data: "json, name=integerValue" })
  integerValue?: string;

  @Metadata({ data: "json, name=mapValue" })
  mapValue?: MapValue;

  @Metadata({ data: "json, name=nullValue" })
  nullValue?: ValueNullValueEnum;

  @Metadata({ data: "json, name=referenceValue" })
  referenceValue?: string;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;

  @Metadata({ data: "json, name=timestampValue" })
  timestampValue?: string;
}
