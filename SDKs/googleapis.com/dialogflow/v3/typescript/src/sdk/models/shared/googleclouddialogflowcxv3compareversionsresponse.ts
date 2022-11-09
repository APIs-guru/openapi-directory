import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3CompareVersionsResponse
/** 
 * The response message for Versions.CompareVersions.
**/
export class GoogleCloudDialogflowCxV3CompareVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseVersionContentJson" })
  baseVersionContentJson?: string;

  @Metadata({ data: "json, name=compareTime" })
  compareTime?: string;

  @Metadata({ data: "json, name=targetVersionContentJson" })
  targetVersionContentJson?: string;
}
