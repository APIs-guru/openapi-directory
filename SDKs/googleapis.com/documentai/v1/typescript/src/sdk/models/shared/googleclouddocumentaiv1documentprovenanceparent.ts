import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1DocumentProvenanceParent
/** 
 * The parent element the current element is based on. Used for referencing/aligning, removal and replacement operations.
**/
export class GoogleCloudDocumentaiV1DocumentProvenanceParent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: number;
}
