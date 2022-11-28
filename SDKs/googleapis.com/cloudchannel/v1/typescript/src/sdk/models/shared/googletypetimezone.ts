import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleTypeTimeZone
/** 
 * Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
**/
export class GoogleTypeTimeZone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
