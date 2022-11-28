import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=entities", elemType: GoogleCloudDocumentaiV1beta3DocumentEntity })
  entities?: GoogleCloudDocumentaiV1beta3DocumentEntity[];

  @SpeakeasyMetadata({ data: "json, name=entityRelations", elemType: GoogleCloudDocumentaiV1beta3DocumentEntityRelation })
  entityRelations?: GoogleCloudDocumentaiV1beta3DocumentEntityRelation[];

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: GoogleRpcStatus;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=pages", elemType: GoogleCloudDocumentaiV1beta3DocumentPage })
  pages?: GoogleCloudDocumentaiV1beta3DocumentPage[];

  @SpeakeasyMetadata({ data: "json, name=revisions", elemType: GoogleCloudDocumentaiV1beta3DocumentRevision })
  revisions?: GoogleCloudDocumentaiV1beta3DocumentRevision[];

  @SpeakeasyMetadata({ data: "json, name=shardInfo" })
  shardInfo?: GoogleCloudDocumentaiV1beta3DocumentShardInfo;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=textChanges", elemType: GoogleCloudDocumentaiV1beta3DocumentTextChange })
  textChanges?: GoogleCloudDocumentaiV1beta3DocumentTextChange[];

  @SpeakeasyMetadata({ data: "json, name=textStyles", elemType: GoogleCloudDocumentaiV1beta3DocumentStyle })
  textStyles?: GoogleCloudDocumentaiV1beta3DocumentStyle[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
