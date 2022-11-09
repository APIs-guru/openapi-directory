import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatafeedStatusExample } from "./datafeedstatusexample";


// DatafeedStatusError
/** 
 * An error occurring in the feed, like "invalid price".
**/
export class DatafeedStatusError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=count" })
  count?: string;

  @Metadata({ data: "json, name=examples", elemType: shared.DatafeedStatusExample })
  examples?: DatafeedStatusExample[];

  @Metadata({ data: "json, name=message" })
  message?: string;
}
