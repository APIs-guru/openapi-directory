import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1SessionEntityType } from "./googleclouddialogflowcxv3beta1sessionentitytype";



// GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse
/** 
 * The response message for SessionEntityTypes.ListSessionEntityTypes.
**/
export class GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionEntityTypes", elemType: GoogleCloudDialogflowCxV3beta1SessionEntityType })
  sessionEntityTypes?: GoogleCloudDialogflowCxV3beta1SessionEntityType[];
}
