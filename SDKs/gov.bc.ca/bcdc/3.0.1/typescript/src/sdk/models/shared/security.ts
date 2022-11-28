import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeGithubAccessCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class SchemeInternalApiKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=ckan_api_key" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  githubAccessCode?: SchemeGithubAccessCode;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  internalApiKey?: SchemeInternalApiKey;
}
