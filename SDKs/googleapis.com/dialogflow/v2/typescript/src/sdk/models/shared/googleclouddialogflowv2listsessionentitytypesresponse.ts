import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2SessionEntityType } from "./googleclouddialogflowv2sessionentitytype";


// GoogleCloudDialogflowV2ListSessionEntityTypesResponse
/** 
 * The response message for SessionEntityTypes.ListSessionEntityTypes.
**/
export class GoogleCloudDialogflowV2ListSessionEntityTypesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=sessionEntityTypes", elemType: shared.GoogleCloudDialogflowV2SessionEntityType })
  sessionEntityTypes?: GoogleCloudDialogflowV2SessionEntityType[];
}
