import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeGithubAccessCode extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class SchemeInternalApiKey extends SpeakeasyBase {
  @Metadata({ data: "security, name=ckan_api_key" })
  apiKey: string;
}


export class SecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  githubAccessCode: SchemeGithubAccessCode;
}


export class SecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  internalApiKey: SchemeInternalApiKey;
}


export class Security extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: SecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: SecurityOption2;
}
