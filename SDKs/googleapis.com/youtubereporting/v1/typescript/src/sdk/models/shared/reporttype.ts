import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReportType
/** 
 * A report type.
**/
export class ReportType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deprecateTime" })
  deprecateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=systemManaged" })
  systemManaged?: boolean;
}
