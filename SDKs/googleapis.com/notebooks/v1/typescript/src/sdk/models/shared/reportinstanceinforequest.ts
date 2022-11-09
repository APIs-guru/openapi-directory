import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReportInstanceInfoRequest
/** 
 * Request for notebook instances to report information to Notebooks API.
**/
export class ReportInstanceInfoRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=vmId" })
  vmId?: string;
}
