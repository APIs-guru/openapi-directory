import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1TagField } from "./googleclouddatacatalogv1beta1tagfield";
import { GoogleCloudDatacatalogV1beta1TagFieldInput } from "./googleclouddatacatalogv1beta1tagfield";
/**
 * Tags are used to attach custom metadata to Data Catalog resources. Tags conform to the specifications within their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.
**/
export declare class GoogleCloudDatacatalogV1beta1Tag extends SpeakeasyBase {
    column?: string;
    fields?: Map<string, GoogleCloudDatacatalogV1beta1TagField>;
    name?: string;
    template?: string;
    templateDisplayName?: string;
}
/**
 * Tags are used to attach custom metadata to Data Catalog resources. Tags conform to the specifications within their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.
**/
export declare class GoogleCloudDatacatalogV1beta1TagInput extends SpeakeasyBase {
    column?: string;
    fields?: Map<string, GoogleCloudDatacatalogV1beta1TagFieldInput>;
    name?: string;
    template?: string;
}
