import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatafeedStatusExample } from "./datafeedstatusexample";



// DatafeedStatusError
/** 
 * An error occurring in the feed, like "invalid price".
**/
export class DatafeedStatusError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=examples", elemType: DatafeedStatusExample })
  examples?: DatafeedStatusExample[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
