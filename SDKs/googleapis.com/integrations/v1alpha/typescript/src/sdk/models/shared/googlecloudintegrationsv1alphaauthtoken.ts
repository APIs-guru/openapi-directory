import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIntegrationsV1alphaAuthToken
/** 
 * The credentials to authenticate a user agent with a server that is put in HTTP Authorization request header.
**/
export class GoogleCloudIntegrationsV1alphaAuthToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=token" })
  token?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
