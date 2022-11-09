import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRunV2HttpHeader } from "./googlecloudrunv2httpheader";


// GoogleCloudRunV2HttpGetAction
/** 
 * HTTPGetAction describes an action based on HTTP Get requests.
**/
export class GoogleCloudRunV2HttpGetAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=httpHeaders", elemType: shared.GoogleCloudRunV2HttpHeader })
  httpHeaders?: GoogleCloudRunV2HttpHeader[];

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=scheme" })
  scheme?: string;
}
