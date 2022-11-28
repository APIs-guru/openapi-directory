import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepeatedEnumAttributeValue } from "./repeatedenumattributevalue";
import { UriAttributeValue } from "./uriattributevalue";


export enum AttributeValueTypeEnum {
    AttributeValueTypeUnspecified = "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
    Bool = "BOOL",
    Enum = "ENUM",
    Url = "URL",
    RepeatedEnum = "REPEATED_ENUM"
}


// Attribute
/** 
 * A location attribute. Attributes provide additional information about a location. The attributes that can be set on a location may vary based on the properties of that location (for example, category). Available attributes are determined by Google and may be added and removed without API changes.
**/
export class Attribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=repeatedEnumValue" })
  repeatedEnumValue?: RepeatedEnumAttributeValue;

  @SpeakeasyMetadata({ data: "json, name=uriValues", elemType: UriAttributeValue })
  uriValues?: UriAttributeValue[];

  @SpeakeasyMetadata({ data: "json, name=valueType" })
  valueType?: AttributeValueTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: any[];
}


// AttributeInput
/** 
 * A location attribute. Attributes provide additional information about a location. The attributes that can be set on a location may vary based on the properties of that location (for example, category). Available attributes are determined by Google and may be added and removed without API changes.
**/
export class AttributeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=repeatedEnumValue" })
  repeatedEnumValue?: RepeatedEnumAttributeValue;

  @SpeakeasyMetadata({ data: "json, name=uriValues", elemType: UriAttributeValue })
  uriValues?: UriAttributeValue[];

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: any[];
}
