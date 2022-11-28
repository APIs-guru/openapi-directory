import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1TagTemplateFieldInput } from "./googleclouddatacatalogv1beta1tagtemplatefield";
import { GoogleCloudDatacatalogV1beta1TagTemplateField } from "./googleclouddatacatalogv1beta1tagtemplatefield";



// GoogleCloudDatacatalogV1beta1TagTemplateInput
/** 
 * A tag template defines a tag, which can have one or more typed fields. The template is used to create and attach the tag to GCP resources. [Tag template roles](https://cloud.google.com/iam/docs/understanding-roles#data-catalog-roles) provide permissions to create, edit, and use the template. See, for example, the [TagTemplate User](https://cloud.google.com/data-catalog/docs/how-to/template-user) role, which includes permission to use the tag template to tag resources.
**/
export class GoogleCloudDatacatalogV1beta1TagTemplateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleCloudDatacatalogV1beta1TagTemplateFieldInput })
  fields?: Map<string, GoogleCloudDatacatalogV1beta1TagTemplateFieldInput>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// GoogleCloudDatacatalogV1beta1TagTemplate
/** 
 * A tag template defines a tag, which can have one or more typed fields. The template is used to create and attach the tag to GCP resources. [Tag template roles](https://cloud.google.com/iam/docs/understanding-roles#data-catalog-roles) provide permissions to create, edit, and use the template. See, for example, the [TagTemplate User](https://cloud.google.com/data-catalog/docs/how-to/template-user) role, which includes permission to use the tag template to tag resources.
**/
export class GoogleCloudDatacatalogV1beta1TagTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleCloudDatacatalogV1beta1TagTemplateField })
  fields?: Map<string, GoogleCloudDatacatalogV1beta1TagTemplateField>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
