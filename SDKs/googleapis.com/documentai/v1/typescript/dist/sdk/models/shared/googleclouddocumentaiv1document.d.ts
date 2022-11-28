import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentEntity } from "./googleclouddocumentaiv1documententity";
import { GoogleCloudDocumentaiV1DocumentEntityRelation } from "./googleclouddocumentaiv1documententityrelation";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudDocumentaiV1DocumentPage } from "./googleclouddocumentaiv1documentpage";
import { GoogleCloudDocumentaiV1DocumentRevision } from "./googleclouddocumentaiv1documentrevision";
import { GoogleCloudDocumentaiV1DocumentShardInfo } from "./googleclouddocumentaiv1documentshardinfo";
import { GoogleCloudDocumentaiV1DocumentTextChange } from "./googleclouddocumentaiv1documenttextchange";
import { GoogleCloudDocumentaiV1DocumentStyle } from "./googleclouddocumentaiv1documentstyle";
/**
 * Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.
**/
export declare class GoogleCloudDocumentaiV1Document extends SpeakeasyBase {
    content?: string;
    entities?: GoogleCloudDocumentaiV1DocumentEntity[];
    entityRelations?: GoogleCloudDocumentaiV1DocumentEntityRelation[];
    error?: GoogleRpcStatus;
    mimeType?: string;
    pages?: GoogleCloudDocumentaiV1DocumentPage[];
    revisions?: GoogleCloudDocumentaiV1DocumentRevision[];
    shardInfo?: GoogleCloudDocumentaiV1DocumentShardInfo;
    text?: string;
    textChanges?: GoogleCloudDocumentaiV1DocumentTextChange[];
    textStyles?: GoogleCloudDocumentaiV1DocumentStyle[];
    uri?: string;
}
