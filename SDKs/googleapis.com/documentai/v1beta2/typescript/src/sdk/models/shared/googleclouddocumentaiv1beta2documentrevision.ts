import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDocumentaiV1beta2DocumentRevisionHumanReview } from "./googleclouddocumentaiv1beta2documentrevisionhumanreview";


// GoogleCloudDocumentaiV1beta2DocumentRevision
/** 
 * Contains past or forward revisions of this document.
**/
export class GoogleCloudDocumentaiV1beta2DocumentRevision extends SpeakeasyBase {
  @Metadata({ data: "json, name=agent" })
  agent?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=humanReview" })
  humanReview?: GoogleCloudDocumentaiV1beta2DocumentRevisionHumanReview;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: number[];

  @Metadata({ data: "json, name=parentIds" })
  parentIds?: string[];

  @Metadata({ data: "json, name=processor" })
  processor?: string;
}
