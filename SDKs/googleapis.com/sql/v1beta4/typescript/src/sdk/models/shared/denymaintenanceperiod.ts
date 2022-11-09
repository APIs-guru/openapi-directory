import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DenyMaintenancePeriod
/** 
 * Deny Maintenance Periods. This specifies a date range during when all CSA rollout will be denied.
**/
export class DenyMaintenancePeriod extends SpeakeasyBase {
  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=startDate" })
  startDate?: string;

  @Metadata({ data: "json, name=time" })
  time?: string;
}
