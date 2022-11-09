import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1TagTemplateField } from "./googleclouddatacatalogv1tagtemplatefield";


// GoogleCloudDatacatalogV1TagTemplate
/** 
 * A tag template defines a tag that can have one or more typed fields. The template is used to create tags that are attached to GCP resources. [Tag template roles] (https://cloud.google.com/iam/docs/understanding-roles#data-catalog-roles) provide permissions to create, edit, and use the template. For example, see the [TagTemplate User] (https://cloud.google.com/data-catalog/docs/how-to/template-user) role that includes a permission to use the tag template to tag resources.
**/
export class GoogleCloudDatacatalogV1TagTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=fields", elemType: shared.GoogleCloudDatacatalogV1TagTemplateField })
  fields?: Map<string, GoogleCloudDatacatalogV1TagTemplateField>;

  @Metadata({ data: "json, name=isPubliclyReadable" })
  isPubliclyReadable?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
