import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OpenIdConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jwks_uri" })
  jwksUri?: string;
}
