import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentEntity } from "./googleclouddocumentaiv1beta2documententity";
import { GoogleCloudDocumentaiV1beta2DocumentEntityRelation } from "./googleclouddocumentaiv1beta2documententityrelation";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudDocumentaiV1beta2DocumentLabel } from "./googleclouddocumentaiv1beta2documentlabel";
import { GoogleCloudDocumentaiV1beta2DocumentPage } from "./googleclouddocumentaiv1beta2documentpage";
import { GoogleCloudDocumentaiV1beta2DocumentRevision } from "./googleclouddocumentaiv1beta2documentrevision";
import { GoogleCloudDocumentaiV1beta2DocumentShardInfo } from "./googleclouddocumentaiv1beta2documentshardinfo";
import { GoogleCloudDocumentaiV1beta2DocumentTextChange } from "./googleclouddocumentaiv1beta2documenttextchange";
import { GoogleCloudDocumentaiV1beta2DocumentStyle } from "./googleclouddocumentaiv1beta2documentstyle";
/**
 * Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.
**/
export declare class GoogleCloudDocumentaiV1beta2Document extends SpeakeasyBase {
    content?: string;
    entities?: GoogleCloudDocumentaiV1beta2DocumentEntity[];
    entityRelations?: GoogleCloudDocumentaiV1beta2DocumentEntityRelation[];
    error?: GoogleRpcStatus;
    labels?: GoogleCloudDocumentaiV1beta2DocumentLabel[];
    mimeType?: string;
    pages?: GoogleCloudDocumentaiV1beta2DocumentPage[];
    revisions?: GoogleCloudDocumentaiV1beta2DocumentRevision[];
    shardInfo?: GoogleCloudDocumentaiV1beta2DocumentShardInfo;
    text?: string;
    textChanges?: GoogleCloudDocumentaiV1beta2DocumentTextChange[];
    textStyles?: GoogleCloudDocumentaiV1beta2DocumentStyle[];
    uri?: string;
}
