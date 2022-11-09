import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1EntityType } from "./googleclouddialogflowv2beta1entitytype";


// GoogleCloudDialogflowV2beta1EntityTypeBatch
/** 
 * This message is a wrapper around a collection of entity types.
**/
export class GoogleCloudDialogflowV2beta1EntityTypeBatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=entityTypes", elemType: shared.GoogleCloudDialogflowV2beta1EntityType })
  entityTypes?: GoogleCloudDialogflowV2beta1EntityType[];
}
