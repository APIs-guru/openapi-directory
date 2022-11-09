import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OpenIdConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=jwks_uri" })
  jwksUri?: string;
}
