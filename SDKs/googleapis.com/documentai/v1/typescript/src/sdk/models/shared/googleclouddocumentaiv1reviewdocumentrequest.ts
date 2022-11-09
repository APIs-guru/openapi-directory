import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDocumentaiV1DocumentSchema } from "./googleclouddocumentaiv1documentschema";
import { GoogleCloudDocumentaiV1Document } from "./googleclouddocumentaiv1document";

export enum GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnum {
    Default = "DEFAULT"
,    Urgent = "URGENT"
}


// GoogleCloudDocumentaiV1ReviewDocumentRequest
/** 
 * Request message for review document method.
**/
export class GoogleCloudDocumentaiV1ReviewDocumentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentSchema" })
  documentSchema?: GoogleCloudDocumentaiV1DocumentSchema;

  @Metadata({ data: "json, name=enableSchemaValidation" })
  enableSchemaValidation?: boolean;

  @Metadata({ data: "json, name=inlineDocument" })
  inlineDocument?: GoogleCloudDocumentaiV1Document;

  @Metadata({ data: "json, name=priority" })
  priority?: GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnum;
}
