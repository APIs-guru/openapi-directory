import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3TestConfig
/** 
 * Represents configurations for a test case.
**/
export class GoogleCloudDialogflowCxV3TestConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=flow" })
  flow?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: string;

  @SpeakeasyMetadata({ data: "json, name=trackingParameters" })
  trackingParameters?: string[];
}
