import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2HttpHeader } from "./googlecloudrunv2httpheader";
/**
 * HTTPGetAction describes an action based on HTTP Get requests.
**/
export declare class GoogleCloudRunV2HttpGetAction extends SpeakeasyBase {
    httpHeaders?: GoogleCloudRunV2HttpHeader[];
    path?: string;
}
