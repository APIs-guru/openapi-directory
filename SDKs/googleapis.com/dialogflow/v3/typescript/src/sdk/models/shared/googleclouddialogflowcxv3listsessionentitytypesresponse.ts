import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3SessionEntityType } from "./googleclouddialogflowcxv3sessionentitytype";


// GoogleCloudDialogflowCxV3ListSessionEntityTypesResponse
/** 
 * The response message for SessionEntityTypes.ListSessionEntityTypes.
**/
export class GoogleCloudDialogflowCxV3ListSessionEntityTypesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=sessionEntityTypes", elemType: shared.GoogleCloudDialogflowCxV3SessionEntityType })
  sessionEntityTypes?: GoogleCloudDialogflowCxV3SessionEntityType[];
}
