import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentRevisionHumanReview } from "./googleclouddocumentaiv1documentrevisionhumanreview";



// GoogleCloudDocumentaiV1DocumentRevision
/** 
 * Contains past or forward revisions of this document.
**/
export class GoogleCloudDocumentaiV1DocumentRevision extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agent" })
  agent?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=humanReview" })
  humanReview?: GoogleCloudDocumentaiV1DocumentRevisionHumanReview;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: number[];

  @SpeakeasyMetadata({ data: "json, name=parentIds" })
  parentIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=processor" })
  processor?: string;
}
