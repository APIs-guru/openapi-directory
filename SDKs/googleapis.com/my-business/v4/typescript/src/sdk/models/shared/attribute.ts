import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RepeatedEnumAttributeValue } from "./repeatedenumattributevalue";
import { UrlAttributeValue } from "./urlattributevalue";

export enum AttributeValueTypeEnum {
    AttributeValueTypeUnspecified = "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"
,    Bool = "BOOL"
,    Enum = "ENUM"
,    Url = "URL"
,    RepeatedEnum = "REPEATED_ENUM"
}


// Attribute
/** 
 * A location attribute. Attributes provide additional information about a location. The attributes that can be set on a location may vary based on the properties of that location (for example, category). Available attributes are determined by Google and may be added and removed without API changes.
**/
export class Attribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeId" })
  attributeId?: string;

  @Metadata({ data: "json, name=repeatedEnumValue" })
  repeatedEnumValue?: RepeatedEnumAttributeValue;

  @Metadata({ data: "json, name=urlValues", elemType: shared.UrlAttributeValue })
  urlValues?: UrlAttributeValue[];

  @Metadata({ data: "json, name=valueType" })
  valueType?: AttributeValueTypeEnum;

  @Metadata({ data: "json, name=values" })
  values?: any[];
}
