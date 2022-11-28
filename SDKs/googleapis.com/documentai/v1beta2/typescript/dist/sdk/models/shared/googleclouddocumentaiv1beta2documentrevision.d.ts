import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentRevisionHumanReview } from "./googleclouddocumentaiv1beta2documentrevisionhumanreview";
/**
 * Contains past or forward revisions of this document.
**/
export declare class GoogleCloudDocumentaiV1beta2DocumentRevision extends SpeakeasyBase {
    agent?: string;
    createTime?: string;
    humanReview?: GoogleCloudDocumentaiV1beta2DocumentRevisionHumanReview;
    id?: string;
    parent?: number[];
    parentIds?: string[];
    processor?: string;
}
