import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDiscoveryengineV1betaDocument
/** 
 * Document captures all raw metadata information of items to be recommended or searched.
**/
export class GoogleCloudDiscoveryengineV1betaDocument extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=jsonData" })
  jsonData?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentDocumentId" })
  parentDocumentId?: string;

  @SpeakeasyMetadata({ data: "json, name=schemaId" })
  schemaId?: string;

  @SpeakeasyMetadata({ data: "json, name=structData" })
  structData?: Map<string, any>;
}
