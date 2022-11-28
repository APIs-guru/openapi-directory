import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Config } from "./googlecloudmlv1config";
/**
 * Returns service account information associated with a project.
**/
export declare class GoogleCloudMlV1GetConfigResponse extends SpeakeasyBase {
    config?: GoogleCloudMlV1Config;
    serviceAccount?: string;
    serviceAccountProject?: string;
}
