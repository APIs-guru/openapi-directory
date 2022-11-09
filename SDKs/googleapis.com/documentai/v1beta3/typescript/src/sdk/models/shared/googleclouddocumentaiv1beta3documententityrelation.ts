import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1beta3DocumentEntityRelation
/** 
 * Relationship between Entities.
**/
export class GoogleCloudDocumentaiV1beta3DocumentEntityRelation extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=relation" })
  relation?: string;

  @Metadata({ data: "json, name=subjectId" })
  subjectId?: string;
}
