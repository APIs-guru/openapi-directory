import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview } from "./googleclouddocumentaiv1beta3documentrevisionhumanreview";
/**
 * Contains past or forward revisions of this document.
**/
export declare class GoogleCloudDocumentaiV1beta3DocumentRevision extends SpeakeasyBase {
    agent?: string;
    createTime?: string;
    humanReview?: GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview;
    id?: string;
    parent?: number[];
    parentIds?: string[];
    processor?: string;
}
