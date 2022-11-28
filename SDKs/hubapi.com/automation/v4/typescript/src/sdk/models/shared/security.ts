import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeDeveloperHapikey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=hapikey" })
  apiKey: string;
}


export class SchemeHapikey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=hapikey" })
  apiKey: string;
}


export class SchemeOauth2Legacy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class SchemePrivateAppsLegacy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=private-app-legacy" })
  apiKey: string;
}
