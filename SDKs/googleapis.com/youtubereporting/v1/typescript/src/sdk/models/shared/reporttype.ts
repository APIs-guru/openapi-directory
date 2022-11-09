import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReportType
/** 
 * A report type.
**/
export class ReportType extends SpeakeasyBase {
  @Metadata({ data: "json, name=deprecateTime" })
  deprecateTime?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=systemManaged" })
  systemManaged?: boolean;
}
