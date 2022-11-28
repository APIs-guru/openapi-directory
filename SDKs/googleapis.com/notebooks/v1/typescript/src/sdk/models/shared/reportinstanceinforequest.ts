import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReportInstanceInfoRequest
/** 
 * Request for notebook instances to report information to Notebooks API.
**/
export class ReportInstanceInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=vmId" })
  vmId?: string;
}
