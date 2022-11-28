import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1EntityType } from "./googleclouddialogflowv2beta1entitytype";



// GoogleCloudDialogflowV2beta1EntityTypeBatch
/** 
 * This message is a wrapper around a collection of entity types.
**/
export class GoogleCloudDialogflowV2beta1EntityTypeBatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entityTypes", elemType: GoogleCloudDialogflowV2beta1EntityType })
  entityTypes?: GoogleCloudDialogflowV2beta1EntityType[];
}
