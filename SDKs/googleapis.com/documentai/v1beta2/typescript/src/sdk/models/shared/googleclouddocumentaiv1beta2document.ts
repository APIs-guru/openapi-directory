import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta2DocumentEntity } from "./googleclouddocumentaiv1beta2documententity";
import { GoogleCloudDocumentaiV1beta2DocumentEntityRelation } from "./googleclouddocumentaiv1beta2documententityrelation";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudDocumentaiV1beta2DocumentLabel } from "./googleclouddocumentaiv1beta2documentlabel";
import { GoogleCloudDocumentaiV1beta2DocumentPage } from "./googleclouddocumentaiv1beta2documentpage";
import { GoogleCloudDocumentaiV1beta2DocumentRevision } from "./googleclouddocumentaiv1beta2documentrevision";
import { GoogleCloudDocumentaiV1beta2DocumentShardInfo } from "./googleclouddocumentaiv1beta2documentshardinfo";
import { GoogleCloudDocumentaiV1beta2DocumentTextChange } from "./googleclouddocumentaiv1beta2documenttextchange";
import { GoogleCloudDocumentaiV1beta2DocumentStyle } from "./googleclouddocumentaiv1beta2documentstyle";


// GoogleCloudDocumentaiV1beta2Document
/** 
 * Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.
**/
export class GoogleCloudDocumentaiV1beta2Document extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=entities", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentEntity })
  entities?: GoogleCloudDocumentaiV1beta2DocumentEntity[];

  @Metadata({ data: "json, name=entityRelations", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentEntityRelation })
  entityRelations?: GoogleCloudDocumentaiV1beta2DocumentEntityRelation[];

  @Metadata({ data: "json, name=error" })
  error?: GoogleRpcStatus;

  @Metadata({ data: "json, name=labels", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentLabel })
  labels?: GoogleCloudDocumentaiV1beta2DocumentLabel[];

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=pages", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentPage })
  pages?: GoogleCloudDocumentaiV1beta2DocumentPage[];

  @Metadata({ data: "json, name=revisions", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentRevision })
  revisions?: GoogleCloudDocumentaiV1beta2DocumentRevision[];

  @Metadata({ data: "json, name=shardInfo" })
  shardInfo?: GoogleCloudDocumentaiV1beta2DocumentShardInfo;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=textChanges", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentTextChange })
  textChanges?: GoogleCloudDocumentaiV1beta2DocumentTextChange[];

  @Metadata({ data: "json, name=textStyles", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentStyle })
  textStyles?: GoogleCloudDocumentaiV1beta2DocumentStyle[];

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
