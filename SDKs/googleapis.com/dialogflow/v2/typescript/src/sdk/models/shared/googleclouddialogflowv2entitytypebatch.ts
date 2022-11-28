import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2EntityType } from "./googleclouddialogflowv2entitytype";



// GoogleCloudDialogflowV2EntityTypeBatch
/** 
 * This message is a wrapper around a collection of entity types.
**/
export class GoogleCloudDialogflowV2EntityTypeBatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entityTypes", elemType: GoogleCloudDialogflowV2EntityType })
  entityTypes?: GoogleCloudDialogflowV2EntityType[];
}
