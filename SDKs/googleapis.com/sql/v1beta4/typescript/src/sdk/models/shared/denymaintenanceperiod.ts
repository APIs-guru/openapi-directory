import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DenyMaintenancePeriod
/** 
 * Deny Maintenance Periods. This specifies a date range during when all CSA rollout will be denied.
**/
export class DenyMaintenancePeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;
}
