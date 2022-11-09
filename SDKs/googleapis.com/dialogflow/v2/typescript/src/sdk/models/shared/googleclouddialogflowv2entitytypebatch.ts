import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2EntityType } from "./googleclouddialogflowv2entitytype";


// GoogleCloudDialogflowV2EntityTypeBatch
/** 
 * This message is a wrapper around a collection of entity types.
**/
export class GoogleCloudDialogflowV2EntityTypeBatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=entityTypes", elemType: shared.GoogleCloudDialogflowV2EntityType })
  entityTypes?: GoogleCloudDialogflowV2EntityType[];
}
