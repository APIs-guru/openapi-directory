import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1beta1TagTemplateField } from "./googleclouddatacatalogv1beta1tagtemplatefield";


// GoogleCloudDatacatalogV1beta1TagTemplate
/** 
 * A tag template defines a tag, which can have one or more typed fields. The template is used to create and attach the tag to GCP resources. [Tag template roles](https://cloud.google.com/iam/docs/understanding-roles#data-catalog-roles) provide permissions to create, edit, and use the template. See, for example, the [TagTemplate User](https://cloud.google.com/data-catalog/docs/how-to/template-user) role, which includes permission to use the tag template to tag resources.
**/
export class GoogleCloudDatacatalogV1beta1TagTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=fields", elemType: shared.GoogleCloudDatacatalogV1beta1TagTemplateField })
  fields?: Map<string, GoogleCloudDatacatalogV1beta1TagTemplateField>;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
