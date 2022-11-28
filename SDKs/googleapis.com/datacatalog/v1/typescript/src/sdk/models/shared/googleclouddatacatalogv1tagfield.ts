import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1TagFieldEnumValue } from "./googleclouddatacatalogv1tagfieldenumvalue";



// GoogleCloudDatacatalogV1TagField
/** 
 * Contains the value and additional information on a field within a Tag.
**/
export class GoogleCloudDatacatalogV1TagField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @SpeakeasyMetadata({ data: "json, name=enumValue" })
  enumValue?: GoogleCloudDatacatalogV1TagFieldEnumValue;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: number;

  @SpeakeasyMetadata({ data: "json, name=richtextValue" })
  richtextValue?: string;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;

  @SpeakeasyMetadata({ data: "json, name=timestampValue" })
  timestampValue?: string;
}


// GoogleCloudDatacatalogV1TagFieldInput
/** 
 * Contains the value and additional information on a field within a Tag.
**/
export class GoogleCloudDatacatalogV1TagFieldInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @SpeakeasyMetadata({ data: "json, name=enumValue" })
  enumValue?: GoogleCloudDatacatalogV1TagFieldEnumValue;

  @SpeakeasyMetadata({ data: "json, name=richtextValue" })
  richtextValue?: string;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;

  @SpeakeasyMetadata({ data: "json, name=timestampValue" })
  timestampValue?: string;
}
