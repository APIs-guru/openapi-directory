import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReadOnly
/** 
 * Message type to initiate a read-only transaction.
**/
export class ReadOnly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exactStaleness" })
  exactStaleness?: string;

  @SpeakeasyMetadata({ data: "json, name=maxStaleness" })
  maxStaleness?: string;

  @SpeakeasyMetadata({ data: "json, name=minReadTimestamp" })
  minReadTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=readTimestamp" })
  readTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=returnReadTimestamp" })
  returnReadTimestamp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=strong" })
  strong?: boolean;
}
