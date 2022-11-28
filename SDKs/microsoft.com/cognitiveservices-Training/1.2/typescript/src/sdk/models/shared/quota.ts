import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Quota
/** 
 * Represents a quota
**/
export class Quota extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TimeUntilReset" })
  timeUntilReset?: string;

  @SpeakeasyMetadata({ data: "json, name=Total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=Used" })
  used?: number;
}
