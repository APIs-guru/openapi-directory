import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReadOnly
/** 
 * Message type to initiate a read-only transaction.
**/
export class ReadOnly extends SpeakeasyBase {
  @Metadata({ data: "json, name=exactStaleness" })
  exactStaleness?: string;

  @Metadata({ data: "json, name=maxStaleness" })
  maxStaleness?: string;

  @Metadata({ data: "json, name=minReadTimestamp" })
  minReadTimestamp?: string;

  @Metadata({ data: "json, name=readTimestamp" })
  readTimestamp?: string;

  @Metadata({ data: "json, name=returnReadTimestamp" })
  returnReadTimestamp?: boolean;

  @Metadata({ data: "json, name=strong" })
  strong?: boolean;
}
