import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentRevisionHumanReview } from "./googleclouddocumentaiv1documentrevisionhumanreview";
/**
 * Contains past or forward revisions of this document.
**/
export declare class GoogleCloudDocumentaiV1DocumentRevision extends SpeakeasyBase {
    agent?: string;
    createTime?: string;
    humanReview?: GoogleCloudDocumentaiV1DocumentRevisionHumanReview;
    id?: string;
    parent?: number[];
    parentIds?: string[];
    processor?: string;
}
