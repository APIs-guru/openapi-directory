import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3Document } from "./googleclouddocumentaiv1beta3document";
import { GoogleCloudDocumentaiV1beta3DocumentSchema } from "./googleclouddocumentaiv1beta3documentschema";


export enum GoogleCloudDocumentaiV1beta3ReviewDocumentRequestPriorityEnum {
    Default = "DEFAULT",
    Urgent = "URGENT"
}


// GoogleCloudDocumentaiV1beta3ReviewDocumentRequest
/** 
 * Request message for review document method.
**/
export class GoogleCloudDocumentaiV1beta3ReviewDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=document" })
  document?: GoogleCloudDocumentaiV1beta3Document;

  @SpeakeasyMetadata({ data: "json, name=documentSchema" })
  documentSchema?: GoogleCloudDocumentaiV1beta3DocumentSchema;

  @SpeakeasyMetadata({ data: "json, name=enableSchemaValidation" })
  enableSchemaValidation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=inlineDocument" })
  inlineDocument?: GoogleCloudDocumentaiV1beta3Document;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: GoogleCloudDocumentaiV1beta3ReviewDocumentRequestPriorityEnum;
}
