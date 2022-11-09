import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3beta1CompareVersionsResponse
/** 
 * The response message for Versions.CompareVersions.
**/
export class GoogleCloudDialogflowCxV3beta1CompareVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseVersionContentJson" })
  baseVersionContentJson?: string;

  @Metadata({ data: "json, name=compareTime" })
  compareTime?: string;

  @Metadata({ data: "json, name=targetVersionContentJson" })
  targetVersionContentJson?: string;
}
