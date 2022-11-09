import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeValueMetadata } from "./attributevaluemetadata";

export enum AttributeMetadataValueTypeEnum {
    AttributeValueTypeUnspecified = "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"
,    Bool = "BOOL"
,    Enum = "ENUM"
,    Url = "URL"
,    RepeatedEnum = "REPEATED_ENUM"
}


// AttributeMetadata
/** 
 * Metadata for an attribute. Contains display information for the attribute, including a localized name and a heading for grouping related attributes together.
**/
export class AttributeMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=deprecated" })
  deprecated?: boolean;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=groupDisplayName" })
  groupDisplayName?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=repeatable" })
  repeatable?: boolean;

  @Metadata({ data: "json, name=valueMetadata", elemType: shared.AttributeValueMetadata })
  valueMetadata?: AttributeValueMetadata[];

  @Metadata({ data: "json, name=valueType" })
  valueType?: AttributeMetadataValueTypeEnum;
}
