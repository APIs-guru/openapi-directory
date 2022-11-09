import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatacatalogV1beta1FieldType } from "./googleclouddatacatalogv1beta1fieldtype";


// GoogleCloudDatacatalogV1beta1TagTemplateField
/** 
 * The template for an individual field within a tag template.
**/
export class GoogleCloudDatacatalogV1beta1TagTemplateField extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=isRequired" })
  isRequired?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=order" })
  order?: number;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudDatacatalogV1beta1FieldType;
}
