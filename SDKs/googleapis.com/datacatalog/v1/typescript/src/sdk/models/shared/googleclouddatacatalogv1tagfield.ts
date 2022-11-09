import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatacatalogV1TagFieldEnumValue } from "./googleclouddatacatalogv1tagfieldenumvalue";


// GoogleCloudDatacatalogV1TagField
/** 
 * Contains the value and additional information on a field within a Tag.
**/
export class GoogleCloudDatacatalogV1TagField extends SpeakeasyBase {
  @Metadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @Metadata({ data: "json, name=enumValue" })
  enumValue?: GoogleCloudDatacatalogV1TagFieldEnumValue;

  @Metadata({ data: "json, name=order" })
  order?: number;

  @Metadata({ data: "json, name=richtextValue" })
  richtextValue?: string;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;

  @Metadata({ data: "json, name=timestampValue" })
  timestampValue?: string;
}
