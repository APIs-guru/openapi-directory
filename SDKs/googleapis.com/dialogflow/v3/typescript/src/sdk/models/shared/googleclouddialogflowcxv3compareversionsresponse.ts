import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3CompareVersionsResponse
/** 
 * The response message for Versions.CompareVersions.
**/
export class GoogleCloudDialogflowCxV3CompareVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseVersionContentJson" })
  baseVersionContentJson?: string;

  @SpeakeasyMetadata({ data: "json, name=compareTime" })
  compareTime?: string;

  @SpeakeasyMetadata({ data: "json, name=targetVersionContentJson" })
  targetVersionContentJson?: string;
}
