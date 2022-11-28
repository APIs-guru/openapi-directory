import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1TagFieldInput } from "./googleclouddatacatalogv1tagfield";
import { GoogleCloudDatacatalogV1TagField } from "./googleclouddatacatalogv1tagfield";
/**
 * Tags contain custom metadata and are attached to Data Catalog resources. Tags conform with the specification of their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.
**/
export declare class GoogleCloudDatacatalogV1TagInput extends SpeakeasyBase {
    column?: string;
    fields?: Map<string, GoogleCloudDatacatalogV1TagFieldInput>;
    name?: string;
    template?: string;
}
/**
 * Tags contain custom metadata and are attached to Data Catalog resources. Tags conform with the specification of their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.
**/
export declare class GoogleCloudDatacatalogV1Tag extends SpeakeasyBase {
    column?: string;
    fields?: Map<string, GoogleCloudDatacatalogV1TagField>;
    name?: string;
    template?: string;
    templateDisplayName?: string;
}
