import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Config } from "./googlecloudmlv1config";



// GoogleCloudMlV1GetConfigResponse
/** 
 * Returns service account information associated with a project.
**/
export class GoogleCloudMlV1GetConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: GoogleCloudMlV1Config;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountProject" })
  serviceAccountProject?: string;
}
