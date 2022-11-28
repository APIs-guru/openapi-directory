import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3SessionEntityType } from "./googleclouddialogflowcxv3sessionentitytype";



// GoogleCloudDialogflowCxV3ListSessionEntityTypesResponse
/** 
 * The response message for SessionEntityTypes.ListSessionEntityTypes.
**/
export class GoogleCloudDialogflowCxV3ListSessionEntityTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionEntityTypes", elemType: GoogleCloudDialogflowCxV3SessionEntityType })
  sessionEntityTypes?: GoogleCloudDialogflowCxV3SessionEntityType[];
}
