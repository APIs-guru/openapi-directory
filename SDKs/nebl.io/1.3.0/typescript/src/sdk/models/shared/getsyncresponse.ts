import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetSyncResponse
/** 
 * Object containing node sync status
**/
export class GetSyncResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=blockChainHeight" })
  blockChainHeight?: number;

  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=syncPercentage" })
  syncPercentage?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
