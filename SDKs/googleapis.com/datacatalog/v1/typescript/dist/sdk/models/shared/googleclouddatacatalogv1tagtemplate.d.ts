import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1TagTemplateField } from "./googleclouddatacatalogv1tagtemplatefield";
import { GoogleCloudDatacatalogV1TagTemplateFieldInput } from "./googleclouddatacatalogv1tagtemplatefield";
/**
 * A tag template defines a tag that can have one or more typed fields. The template is used to create tags that are attached to GCP resources. [Tag template roles] (https://cloud.google.com/iam/docs/understanding-roles#data-catalog-roles) provide permissions to create, edit, and use the template. For example, see the [TagTemplate User] (https://cloud.google.com/data-catalog/docs/how-to/template-user) role that includes a permission to use the tag template to tag resources.
**/
export declare class GoogleCloudDatacatalogV1TagTemplate extends SpeakeasyBase {
    displayName?: string;
    fields?: Map<string, GoogleCloudDatacatalogV1TagTemplateField>;
    isPubliclyReadable?: boolean;
    name?: string;
}
/**
 * A tag template defines a tag that can have one or more typed fields. The template is used to create tags that are attached to GCP resources. [Tag template roles] (https://cloud.google.com/iam/docs/understanding-roles#data-catalog-roles) provide permissions to create, edit, and use the template. For example, see the [TagTemplate User] (https://cloud.google.com/data-catalog/docs/how-to/template-user) role that includes a permission to use the tag template to tag resources.
**/
export declare class GoogleCloudDatacatalogV1TagTemplateInput extends SpeakeasyBase {
    displayName?: string;
    fields?: Map<string, GoogleCloudDatacatalogV1TagTemplateFieldInput>;
    isPubliclyReadable?: boolean;
    name?: string;
}
