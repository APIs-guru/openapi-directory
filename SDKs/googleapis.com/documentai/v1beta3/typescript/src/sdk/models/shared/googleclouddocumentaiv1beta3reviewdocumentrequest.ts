import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDocumentaiV1beta3Document } from "./googleclouddocumentaiv1beta3document";
import { GoogleCloudDocumentaiV1beta3DocumentSchema } from "./googleclouddocumentaiv1beta3documentschema";
import { GoogleCloudDocumentaiV1beta3Document } from "./googleclouddocumentaiv1beta3document";

export enum GoogleCloudDocumentaiV1beta3ReviewDocumentRequestPriorityEnum {
    Default = "DEFAULT"
,    Urgent = "URGENT"
}


// GoogleCloudDocumentaiV1beta3ReviewDocumentRequest
/** 
 * Request message for review document method.
**/
export class GoogleCloudDocumentaiV1beta3ReviewDocumentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=document" })
  document?: GoogleCloudDocumentaiV1beta3Document;

  @Metadata({ data: "json, name=documentSchema" })
  documentSchema?: GoogleCloudDocumentaiV1beta3DocumentSchema;

  @Metadata({ data: "json, name=enableSchemaValidation" })
  enableSchemaValidation?: boolean;

  @Metadata({ data: "json, name=inlineDocument" })
  inlineDocument?: GoogleCloudDocumentaiV1beta3Document;

  @Metadata({ data: "json, name=priority" })
  priority?: GoogleCloudDocumentaiV1beta3ReviewDocumentRequestPriorityEnum;
}
