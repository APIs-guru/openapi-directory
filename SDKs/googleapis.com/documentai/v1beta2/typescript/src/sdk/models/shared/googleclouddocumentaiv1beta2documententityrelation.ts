import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1beta2DocumentEntityRelation
/** 
 * Relationship between Entities.
**/
export class GoogleCloudDocumentaiV1beta2DocumentEntityRelation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=relation" })
  relation?: string;

  @SpeakeasyMetadata({ data: "json, name=subjectId" })
  subjectId?: string;
}
