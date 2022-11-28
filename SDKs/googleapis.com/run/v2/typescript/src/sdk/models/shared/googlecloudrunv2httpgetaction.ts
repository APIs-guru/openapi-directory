import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2HttpHeader } from "./googlecloudrunv2httpheader";



// GoogleCloudRunV2HttpGetAction
/** 
 * HTTPGetAction describes an action based on HTTP Get requests.
**/
export class GoogleCloudRunV2HttpGetAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=httpHeaders", elemType: GoogleCloudRunV2HttpHeader })
  httpHeaders?: GoogleCloudRunV2HttpHeader[];

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;
}
