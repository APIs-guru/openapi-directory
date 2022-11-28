import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Auth
/** 
 * This message defines request authentication attributes. Terminology is based on the JSON Web Token (JWT) standard, but the terms also correlate to concepts in other standards.
**/
export class Auth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessLevels" })
  accessLevels?: string[];

  @SpeakeasyMetadata({ data: "json, name=audiences" })
  audiences?: string[];

  @SpeakeasyMetadata({ data: "json, name=claims" })
  claims?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=presenter" })
  presenter?: string;

  @SpeakeasyMetadata({ data: "json, name=principal" })
  principal?: string;
}
