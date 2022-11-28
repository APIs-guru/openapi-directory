import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview } from "./googleclouddocumentaiv1beta3documentrevisionhumanreview";



// GoogleCloudDocumentaiV1beta3DocumentRevision
/** 
 * Contains past or forward revisions of this document.
**/
export class GoogleCloudDocumentaiV1beta3DocumentRevision extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agent" })
  agent?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=humanReview" })
  humanReview?: GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: number[];

  @SpeakeasyMetadata({ data: "json, name=parentIds" })
  parentIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=processor" })
  processor?: string;
}
