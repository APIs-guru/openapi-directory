import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=entities", elemType: GoogleCloudDocumentaiV1beta2DocumentEntity })
  entities?: GoogleCloudDocumentaiV1beta2DocumentEntity[];

  @SpeakeasyMetadata({ data: "json, name=entityRelations", elemType: GoogleCloudDocumentaiV1beta2DocumentEntityRelation })
  entityRelations?: GoogleCloudDocumentaiV1beta2DocumentEntityRelation[];

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: GoogleRpcStatus;

  @SpeakeasyMetadata({ data: "json, name=labels", elemType: GoogleCloudDocumentaiV1beta2DocumentLabel })
  labels?: GoogleCloudDocumentaiV1beta2DocumentLabel[];

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=pages", elemType: GoogleCloudDocumentaiV1beta2DocumentPage })
  pages?: GoogleCloudDocumentaiV1beta2DocumentPage[];

  @SpeakeasyMetadata({ data: "json, name=revisions", elemType: GoogleCloudDocumentaiV1beta2DocumentRevision })
  revisions?: GoogleCloudDocumentaiV1beta2DocumentRevision[];

  @SpeakeasyMetadata({ data: "json, name=shardInfo" })
  shardInfo?: GoogleCloudDocumentaiV1beta2DocumentShardInfo;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=textChanges", elemType: GoogleCloudDocumentaiV1beta2DocumentTextChange })
  textChanges?: GoogleCloudDocumentaiV1beta2DocumentTextChange[];

  @SpeakeasyMetadata({ data: "json, name=textStyles", elemType: GoogleCloudDocumentaiV1beta2DocumentStyle })
  textStyles?: GoogleCloudDocumentaiV1beta2DocumentStyle[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
