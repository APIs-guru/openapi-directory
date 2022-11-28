import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1TagField } from "./googleclouddatacatalogv1beta1tagfield";
import { GoogleCloudDatacatalogV1beta1TagFieldInput } from "./googleclouddatacatalogv1beta1tagfield";



// GoogleCloudDatacatalogV1beta1Tag
/** 
 * Tags are used to attach custom metadata to Data Catalog resources. Tags conform to the specifications within their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.
**/
export class GoogleCloudDatacatalogV1beta1Tag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column" })
  column?: string;

  @SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleCloudDatacatalogV1beta1TagField })
  fields?: Map<string, GoogleCloudDatacatalogV1beta1TagField>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: string;

  @SpeakeasyMetadata({ data: "json, name=templateDisplayName" })
  templateDisplayName?: string;
}


// GoogleCloudDatacatalogV1beta1TagInput
/** 
 * Tags are used to attach custom metadata to Data Catalog resources. Tags conform to the specifications within their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.
**/
export class GoogleCloudDatacatalogV1beta1TagInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column" })
  column?: string;

  @SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleCloudDatacatalogV1beta1TagFieldInput })
  fields?: Map<string, GoogleCloudDatacatalogV1beta1TagFieldInput>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: string;
}
