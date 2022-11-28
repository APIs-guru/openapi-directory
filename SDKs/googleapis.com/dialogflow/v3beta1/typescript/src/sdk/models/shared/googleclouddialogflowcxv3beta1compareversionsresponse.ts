import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3beta1CompareVersionsResponse
/** 
 * The response message for Versions.CompareVersions.
**/
export class GoogleCloudDialogflowCxV3beta1CompareVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseVersionContentJson" })
  baseVersionContentJson?: string;

  @SpeakeasyMetadata({ data: "json, name=compareTime" })
  compareTime?: string;

  @SpeakeasyMetadata({ data: "json, name=targetVersionContentJson" })
  targetVersionContentJson?: string;
}
