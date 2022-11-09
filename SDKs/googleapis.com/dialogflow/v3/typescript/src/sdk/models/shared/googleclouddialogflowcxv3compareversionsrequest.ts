import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3CompareVersionsRequest
/** 
 * The request message for Versions.CompareVersions.
**/
export class GoogleCloudDialogflowCxV3CompareVersionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=targetVersion" })
  targetVersion?: string;
}
