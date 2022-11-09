import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimeZone
/** 
 * Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
**/
export class TimeZone extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
