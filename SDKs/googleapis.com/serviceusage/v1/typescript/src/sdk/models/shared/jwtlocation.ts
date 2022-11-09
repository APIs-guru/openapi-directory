import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JwtLocation
/** 
 * Specifies a location to extract JWT from an API request.
**/
export class JwtLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=cookie" })
  cookie?: string;

  @Metadata({ data: "json, name=header" })
  header?: string;

  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=valuePrefix" })
  valuePrefix?: string;
}
