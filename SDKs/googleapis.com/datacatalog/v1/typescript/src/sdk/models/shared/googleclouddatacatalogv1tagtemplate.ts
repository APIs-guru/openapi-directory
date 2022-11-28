import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1TagTemplateField } from "./googleclouddatacatalogv1tagtemplatefield";
import { GoogleCloudDatacatalogV1TagTemplateFieldInput } from "./googleclouddatacatalogv1tagtemplatefield";



// GoogleCloudDatacatalogV1TagTemplate
/** 
 * A tag template defines a tag that can have one or more typed fields. The template is used to create tags that are attached to GCP resources. [Tag template roles] (https://cloud.google.com/iam/docs/understanding-roles#data-catalog-roles) provide permissions to create, edit, and use the template. For example, see the [TagTemplate User] (https://cloud.google.com/data-catalog/docs/how-to/template-user) role that includes a permission to use the tag template to tag resources.
**/
export class GoogleCloudDatacatalogV1TagTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleCloudDatacatalogV1TagTemplateField })
  fields?: Map<string, GoogleCloudDatacatalogV1TagTemplateField>;

  @SpeakeasyMetadata({ data: "json, name=isPubliclyReadable" })
  isPubliclyReadable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// GoogleCloudDatacatalogV1TagTemplateInput
/** 
 * A tag template defines a tag that can have one or more typed fields. The template is used to create tags that are attached to GCP resources. [Tag template roles] (https://cloud.google.com/iam/docs/understanding-roles#data-catalog-roles) provide permissions to create, edit, and use the template. For example, see the [TagTemplate User] (https://cloud.google.com/data-catalog/docs/how-to/template-user) role that includes a permission to use the tag template to tag resources.
**/
export class GoogleCloudDatacatalogV1TagTemplateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleCloudDatacatalogV1TagTemplateFieldInput })
  fields?: Map<string, GoogleCloudDatacatalogV1TagTemplateFieldInput>;

  @SpeakeasyMetadata({ data: "json, name=isPubliclyReadable" })
  isPubliclyReadable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
