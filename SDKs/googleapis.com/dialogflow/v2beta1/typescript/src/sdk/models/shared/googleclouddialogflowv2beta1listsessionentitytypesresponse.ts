import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1SessionEntityType } from "./googleclouddialogflowv2beta1sessionentitytype";



// GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse
/** 
 * The response message for SessionEntityTypes.ListSessionEntityTypes.
**/
export class GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionEntityTypes", elemType: GoogleCloudDialogflowV2beta1SessionEntityType })
  sessionEntityTypes?: GoogleCloudDialogflowV2beta1SessionEntityType[];
}
