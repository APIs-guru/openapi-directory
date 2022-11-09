import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1beta1TagField } from "./googleclouddatacatalogv1beta1tagfield";


// GoogleCloudDatacatalogV1beta1Tag
/** 
 * Tags are used to attach custom metadata to Data Catalog resources. Tags conform to the specifications within their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.
**/
export class GoogleCloudDatacatalogV1beta1Tag extends SpeakeasyBase {
  @Metadata({ data: "json, name=column" })
  column?: string;

  @Metadata({ data: "json, name=fields", elemType: shared.GoogleCloudDatacatalogV1beta1TagField })
  fields?: Map<string, GoogleCloudDatacatalogV1beta1TagField>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=template" })
  template?: string;

  @Metadata({ data: "json, name=templateDisplayName" })
  templateDisplayName?: string;
}
