import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3beta1CompareVersionsRequest
/** 
 * The request message for Versions.CompareVersions.
**/
export class GoogleCloudDialogflowCxV3beta1CompareVersionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=targetVersion" })
  targetVersion?: string;
}
