import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2SessionEntityType } from "./googleclouddialogflowv2sessionentitytype";



// GoogleCloudDialogflowV2ListSessionEntityTypesResponse
/** 
 * The response message for SessionEntityTypes.ListSessionEntityTypes.
**/
export class GoogleCloudDialogflowV2ListSessionEntityTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionEntityTypes", elemType: GoogleCloudDialogflowV2SessionEntityType })
  sessionEntityTypes?: GoogleCloudDialogflowV2SessionEntityType[];
}
