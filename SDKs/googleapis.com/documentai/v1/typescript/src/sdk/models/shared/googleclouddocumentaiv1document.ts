import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=entities", elemType: GoogleCloudDocumentaiV1DocumentEntity })
  entities?: GoogleCloudDocumentaiV1DocumentEntity[];

  @SpeakeasyMetadata({ data: "json, name=entityRelations", elemType: GoogleCloudDocumentaiV1DocumentEntityRelation })
  entityRelations?: GoogleCloudDocumentaiV1DocumentEntityRelation[];

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: GoogleRpcStatus;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=pages", elemType: GoogleCloudDocumentaiV1DocumentPage })
  pages?: GoogleCloudDocumentaiV1DocumentPage[];

  @SpeakeasyMetadata({ data: "json, name=revisions", elemType: GoogleCloudDocumentaiV1DocumentRevision })
  revisions?: GoogleCloudDocumentaiV1DocumentRevision[];

  @SpeakeasyMetadata({ data: "json, name=shardInfo" })
  shardInfo?: GoogleCloudDocumentaiV1DocumentShardInfo;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=textChanges", elemType: GoogleCloudDocumentaiV1DocumentTextChange })
  textChanges?: GoogleCloudDocumentaiV1DocumentTextChange[];

  @SpeakeasyMetadata({ data: "json, name=textStyles", elemType: GoogleCloudDocumentaiV1DocumentStyle })
  textStyles?: GoogleCloudDocumentaiV1DocumentStyle[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
