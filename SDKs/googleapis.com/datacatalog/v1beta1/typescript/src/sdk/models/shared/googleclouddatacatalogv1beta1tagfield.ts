import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1TagFieldEnumValue } from "./googleclouddatacatalogv1beta1tagfieldenumvalue";



// GoogleCloudDatacatalogV1beta1TagFieldInput
/** 
 * Contains the value and supporting information for a field within a Tag.
**/
export class GoogleCloudDatacatalogV1beta1TagFieldInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @SpeakeasyMetadata({ data: "json, name=enumValue" })
  enumValue?: GoogleCloudDatacatalogV1beta1TagFieldEnumValue;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;

  @SpeakeasyMetadata({ data: "json, name=timestampValue" })
  timestampValue?: string;
}


// GoogleCloudDatacatalogV1beta1TagField
/** 
 * Contains the value and supporting information for a field within a Tag.
**/
export class GoogleCloudDatacatalogV1beta1TagField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @SpeakeasyMetadata({ data: "json, name=enumValue" })
  enumValue?: GoogleCloudDatacatalogV1beta1TagFieldEnumValue;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: number;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;

  @SpeakeasyMetadata({ data: "json, name=timestampValue" })
  timestampValue?: string;
}
