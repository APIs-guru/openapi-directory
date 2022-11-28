import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RestoreDomainRequest
/** 
 * RestoreDomainRequest is the request received by RestoreDomain rpc
**/
export class RestoreDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backupId" })
  backupId?: string;
}
