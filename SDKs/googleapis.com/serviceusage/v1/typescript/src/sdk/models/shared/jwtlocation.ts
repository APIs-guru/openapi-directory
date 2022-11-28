import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JwtLocation
/** 
 * Specifies a location to extract JWT from an API request.
**/
export class JwtLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cookie" })
  cookie?: string;

  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: string;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=valuePrefix" })
  valuePrefix?: string;
}
