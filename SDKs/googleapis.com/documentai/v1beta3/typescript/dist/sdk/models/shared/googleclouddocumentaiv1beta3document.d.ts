import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentEntity } from "./googleclouddocumentaiv1beta3documententity";
import { GoogleCloudDocumentaiV1beta3DocumentEntityRelation } from "./googleclouddocumentaiv1beta3documententityrelation";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudDocumentaiV1beta3DocumentPage } from "./googleclouddocumentaiv1beta3documentpage";
import { GoogleCloudDocumentaiV1beta3DocumentRevision } from "./googleclouddocumentaiv1beta3documentrevision";
import { GoogleCloudDocumentaiV1beta3DocumentShardInfo } from "./googleclouddocumentaiv1beta3documentshardinfo";
import { GoogleCloudDocumentaiV1beta3DocumentTextChange } from "./googleclouddocumentaiv1beta3documenttextchange";
import { GoogleCloudDocumentaiV1beta3DocumentStyle } from "./googleclouddocumentaiv1beta3documentstyle";
/**
 * Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.
**/
export declare class GoogleCloudDocumentaiV1beta3Document extends SpeakeasyBase {
    content?: string;
    entities?: GoogleCloudDocumentaiV1beta3DocumentEntity[];
    entityRelations?: GoogleCloudDocumentaiV1beta3DocumentEntityRelation[];
    error?: GoogleRpcStatus;
    mimeType?: string;
    pages?: GoogleCloudDocumentaiV1beta3DocumentPage[];
    revisions?: GoogleCloudDocumentaiV1beta3DocumentRevision[];
    shardInfo?: GoogleCloudDocumentaiV1beta3DocumentShardInfo;
    text?: string;
    textChanges?: GoogleCloudDocumentaiV1beta3DocumentTextChange[];
    textStyles?: GoogleCloudDocumentaiV1beta3DocumentStyle[];
    uri?: string;
}
