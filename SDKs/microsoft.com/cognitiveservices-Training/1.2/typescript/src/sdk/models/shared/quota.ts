import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Quota
/** 
 * Represents a quota
**/
export class Quota extends SpeakeasyBase {
  @Metadata({ data: "json, name=TimeUntilReset" })
  timeUntilReset?: string;

  @Metadata({ data: "json, name=Total" })
  total?: number;

  @Metadata({ data: "json, name=Used" })
  used?: number;
}
