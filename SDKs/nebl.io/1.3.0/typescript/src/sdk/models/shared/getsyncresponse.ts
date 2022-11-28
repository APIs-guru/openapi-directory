import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetSyncResponse
/** 
 * Object containing node sync status
**/
export class GetSyncResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blockChainHeight" })
  blockChainHeight?: number;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=syncPercentage" })
  syncPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
