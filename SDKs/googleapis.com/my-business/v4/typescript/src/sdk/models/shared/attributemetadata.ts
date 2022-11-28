import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValueMetadata } from "./attributevaluemetadata";


export enum AttributeMetadataValueTypeEnum {
    AttributeValueTypeUnspecified = "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
    Bool = "BOOL",
    Enum = "ENUM",
    Url = "URL",
    RepeatedEnum = "REPEATED_ENUM"
}


// AttributeMetadata
/** 
 * Metadata for an attribute. Contains display information for the attribute, including a localized name and a heading for grouping related attributes together.
**/
export class AttributeMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeId" })
  attributeId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=groupDisplayName" })
  groupDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=isDeprecated" })
  isDeprecated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isRepeatable" })
  isRepeatable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=valueMetadata", elemType: AttributeValueMetadata })
  valueMetadata?: AttributeValueMetadata[];

  @SpeakeasyMetadata({ data: "json, name=valueType" })
  valueType?: AttributeMetadataValueTypeEnum;
}
