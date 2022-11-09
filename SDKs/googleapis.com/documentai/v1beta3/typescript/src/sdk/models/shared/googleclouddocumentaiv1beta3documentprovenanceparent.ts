import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1beta3DocumentProvenanceParent
/** 
 * The parent element the current element is based on. Used for referencing/aligning, removal and replacement operations.
**/
export class GoogleCloudDocumentaiV1beta3DocumentProvenanceParent extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=revision" })
  revision?: number;
}
