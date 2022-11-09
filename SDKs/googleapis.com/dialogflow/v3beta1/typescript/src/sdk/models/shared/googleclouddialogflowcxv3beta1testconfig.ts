import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3beta1TestConfig
/** 
 * Represents configurations for a test case.
**/
export class GoogleCloudDialogflowCxV3beta1TestConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=flow" })
  flow?: string;

  @Metadata({ data: "json, name=page" })
  page?: string;

  @Metadata({ data: "json, name=trackingParameters" })
  trackingParameters?: string[];
}
