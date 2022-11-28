import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentSchema } from "./googleclouddocumentaiv1documentschema";
import { GoogleCloudDocumentaiV1Document } from "./googleclouddocumentaiv1document";


export enum GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnum {
    Default = "DEFAULT",
    Urgent = "URGENT"
}


// GoogleCloudDocumentaiV1ReviewDocumentRequest
/** 
 * Request message for review document method.
**/
export class GoogleCloudDocumentaiV1ReviewDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentSchema" })
  documentSchema?: GoogleCloudDocumentaiV1DocumentSchema;

  @SpeakeasyMetadata({ data: "json, name=enableSchemaValidation" })
  enableSchemaValidation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=inlineDocument" })
  inlineDocument?: GoogleCloudDocumentaiV1Document;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnum;
}
