import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=arrayValue" })
  arrayValue?: ArrayValue;

  @Metadata({ data: "json, name=blobValue" })
  blobValue?: string;

  @Metadata({ data: "json, name=booleanValue" })
  booleanValue?: boolean;

  @Metadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @Metadata({ data: "json, name=entityValue" })
  entityValue?: Entity;

  @Metadata({ data: "json, name=excludeFromIndexes" })
  excludeFromIndexes?: boolean;

  @Metadata({ data: "json, name=geoPointValue" })
  geoPointValue?: LatLng;

  @Metadata({ data: "json, name=integerValue" })
  integerValue?: string;

  @Metadata({ data: "json, name=keyValue" })
  keyValue?: Key;

  @Metadata({ data: "json, name=meaning" })
  meaning?: number;

  @Metadata({ data: "json, name=nullValue" })
  nullValue?: ValueNullValueEnum;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;

  @Metadata({ data: "json, name=timestampValue" })
  timestampValue?: string;
}
