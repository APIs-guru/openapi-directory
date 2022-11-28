import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1FieldType } from "./googleclouddatacatalogv1beta1fieldtype";



// GoogleCloudDatacatalogV1beta1TagTemplateFieldInput
/** 
 * The template for an individual field within a tag template.
**/
export class GoogleCloudDatacatalogV1beta1TagTemplateFieldInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=isRequired" })
  isRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudDatacatalogV1beta1FieldType;
}


// GoogleCloudDatacatalogV1beta1TagTemplateField
/** 
 * The template for an individual field within a tag template.
**/
export class GoogleCloudDatacatalogV1beta1TagTemplateField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=isRequired" })
  isRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudDatacatalogV1beta1FieldType;
}
