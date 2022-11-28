import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimeZone
/** 
 * Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
**/
export class TimeZone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
