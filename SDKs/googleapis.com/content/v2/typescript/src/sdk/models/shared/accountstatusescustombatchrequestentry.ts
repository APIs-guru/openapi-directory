import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccountstatusesCustomBatchRequestEntry
/** 
 * A batch entry encoding a single non-batch accountstatuses request.
**/
export class AccountstatusesCustomBatchRequestEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=batchId" })
  batchId?: number;

  @Metadata({ data: "json, name=destinations" })
  destinations?: string[];

  @Metadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @Metadata({ data: "json, name=method" })
  method?: string;
}
