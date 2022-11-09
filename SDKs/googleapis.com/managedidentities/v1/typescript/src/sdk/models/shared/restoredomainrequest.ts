import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RestoreDomainRequest
/** 
 * RestoreDomainRequest is the request received by RestoreDomain rpc
**/
export class RestoreDomainRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=backupId" })
  backupId?: string;
}
