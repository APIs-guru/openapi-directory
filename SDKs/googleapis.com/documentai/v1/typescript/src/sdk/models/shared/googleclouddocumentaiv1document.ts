import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1DocumentEntity } from "./googleclouddocumentaiv1documententity";
import { GoogleCloudDocumentaiV1DocumentEntityRelation } from "./googleclouddocumentaiv1documententityrelation";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudDocumentaiV1DocumentPage } from "./googleclouddocumentaiv1documentpage";
import { GoogleCloudDocumentaiV1DocumentRevision } from "./googleclouddocumentaiv1documentrevision";
import { GoogleCloudDocumentaiV1DocumentShardInfo } from "./googleclouddocumentaiv1documentshardinfo";
import { GoogleCloudDocumentaiV1DocumentTextChange } from "./googleclouddocumentaiv1documenttextchange";
import { GoogleCloudDocumentaiV1DocumentStyle } from "./googleclouddocumentaiv1documentstyle";


// GoogleCloudDocumentaiV1Document
/** 
 * Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.
**/
export class GoogleCloudDocumentaiV1Document extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=entities", elemType: shared.GoogleCloudDocumentaiV1DocumentEntity })
  entities?: GoogleCloudDocumentaiV1DocumentEntity[];

  @Metadata({ data: "json, name=entityRelations", elemType: shared.GoogleCloudDocumentaiV1DocumentEntityRelation })
  entityRelations?: GoogleCloudDocumentaiV1DocumentEntityRelation[];

  @Metadata({ data: "json, name=error" })
  error?: GoogleRpcStatus;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=pages", elemType: shared.GoogleCloudDocumentaiV1DocumentPage })
  pages?: GoogleCloudDocumentaiV1DocumentPage[];

  @Metadata({ data: "json, name=revisions", elemType: shared.GoogleCloudDocumentaiV1DocumentRevision })
  revisions?: GoogleCloudDocumentaiV1DocumentRevision[];

  @Metadata({ data: "json, name=shardInfo" })
  shardInfo?: GoogleCloudDocumentaiV1DocumentShardInfo;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=textChanges", elemType: shared.GoogleCloudDocumentaiV1DocumentTextChange })
  textChanges?: GoogleCloudDocumentaiV1DocumentTextChange[];

  @Metadata({ data: "json, name=textStyles", elemType: shared.GoogleCloudDocumentaiV1DocumentStyle })
  textStyles?: GoogleCloudDocumentaiV1DocumentStyle[];

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
