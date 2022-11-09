import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Auth
/** 
 * This message defines request authentication attributes. Terminology is based on the JSON Web Token (JWT) standard, but the terms also correlate to concepts in other standards.
**/
export class Auth extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessLevels" })
  accessLevels?: string[];

  @Metadata({ data: "json, name=audiences" })
  audiences?: string[];

  @Metadata({ data: "json, name=claims" })
  claims?: Map<string, any>;

  @Metadata({ data: "json, name=presenter" })
  presenter?: string;

  @Metadata({ data: "json, name=principal" })
  principal?: string;
}
