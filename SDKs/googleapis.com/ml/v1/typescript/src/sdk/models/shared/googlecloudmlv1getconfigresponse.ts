import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudMlV1Config } from "./googlecloudmlv1config";


// GoogleCloudMlV1GetConfigResponse
/** 
 * Returns service account information associated with a project.
**/
export class GoogleCloudMlV1GetConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: GoogleCloudMlV1Config;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=serviceAccountProject" })
  serviceAccountProject?: string;
}
