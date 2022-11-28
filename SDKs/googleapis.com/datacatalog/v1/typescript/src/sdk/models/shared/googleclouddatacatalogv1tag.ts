import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1TagFieldInput } from "./googleclouddatacatalogv1tagfield";
import { GoogleCloudDatacatalogV1TagField } from "./googleclouddatacatalogv1tagfield";



// GoogleCloudDatacatalogV1TagInput
/** 
 * Tags contain custom metadata and are attached to Data Catalog resources. Tags conform with the specification of their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.
**/
export class GoogleCloudDatacatalogV1TagInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column" })
  column?: string;

  @SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleCloudDatacatalogV1TagFieldInput })
  fields?: Map<string, GoogleCloudDatacatalogV1TagFieldInput>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: string;
}


// GoogleCloudDatacatalogV1Tag
/** 
 * Tags contain custom metadata and are attached to Data Catalog resources. Tags conform with the specification of their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.
**/
export class GoogleCloudDatacatalogV1Tag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column" })
  column?: string;

  @SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleCloudDatacatalogV1TagField })
  fields?: Map<string, GoogleCloudDatacatalogV1TagField>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: string;

  @SpeakeasyMetadata({ data: "json, name=templateDisplayName" })
  templateDisplayName?: string;
}
