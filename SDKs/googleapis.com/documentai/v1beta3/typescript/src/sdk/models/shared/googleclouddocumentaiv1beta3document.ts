import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta3DocumentEntity } from "./googleclouddocumentaiv1beta3documententity";
import { GoogleCloudDocumentaiV1beta3DocumentEntityRelation } from "./googleclouddocumentaiv1beta3documententityrelation";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudDocumentaiV1beta3DocumentPage } from "./googleclouddocumentaiv1beta3documentpage";
import { GoogleCloudDocumentaiV1beta3DocumentRevision } from "./googleclouddocumentaiv1beta3documentrevision";
import { GoogleCloudDocumentaiV1beta3DocumentShardInfo } from "./googleclouddocumentaiv1beta3documentshardinfo";
import { GoogleCloudDocumentaiV1beta3DocumentTextChange } from "./googleclouddocumentaiv1beta3documenttextchange";
import { GoogleCloudDocumentaiV1beta3DocumentStyle } from "./googleclouddocumentaiv1beta3documentstyle";


// GoogleCloudDocumentaiV1beta3Document
/** 
 * Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.
**/
export class GoogleCloudDocumentaiV1beta3Document extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=entities", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentEntity })
  entities?: GoogleCloudDocumentaiV1beta3DocumentEntity[];

  @Metadata({ data: "json, name=entityRelations", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentEntityRelation })
  entityRelations?: GoogleCloudDocumentaiV1beta3DocumentEntityRelation[];

  @Metadata({ data: "json, name=error" })
  error?: GoogleRpcStatus;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=pages", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentPage })
  pages?: GoogleCloudDocumentaiV1beta3DocumentPage[];

  @Metadata({ data: "json, name=revisions", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentRevision })
  revisions?: GoogleCloudDocumentaiV1beta3DocumentRevision[];

  @Metadata({ data: "json, name=shardInfo" })
  shardInfo?: GoogleCloudDocumentaiV1beta3DocumentShardInfo;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=textChanges", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentTextChange })
  textChanges?: GoogleCloudDocumentaiV1beta3DocumentTextChange[];

  @Metadata({ data: "json, name=textStyles", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentStyle })
  textStyles?: GoogleCloudDocumentaiV1beta3DocumentStyle[];

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
