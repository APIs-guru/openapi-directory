import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIntegrationsV1alphaAuthToken
/** 
 * The credentials to authenticate a user agent with a server that is put in HTTP Authorization request header.
**/
export class GoogleCloudIntegrationsV1alphaAuthToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
