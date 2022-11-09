import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1TagField } from "./googleclouddatacatalogv1tagfield";


// GoogleCloudDatacatalogV1Tag
/** 
 * Tags contain custom metadata and are attached to Data Catalog resources. Tags conform with the specification of their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.
**/
export class GoogleCloudDatacatalogV1Tag extends SpeakeasyBase {
  @Metadata({ data: "json, name=column" })
  column?: string;

  @Metadata({ data: "json, name=fields", elemType: shared.GoogleCloudDatacatalogV1TagField })
  fields?: Map<string, GoogleCloudDatacatalogV1TagField>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=template" })
  template?: string;

  @Metadata({ data: "json, name=templateDisplayName" })
  templateDisplayName?: string;
}
