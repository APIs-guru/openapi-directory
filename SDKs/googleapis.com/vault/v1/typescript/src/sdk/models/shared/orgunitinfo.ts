import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OrgUnitInfo
/** 
 * The organizational unit to search
**/
export class OrgUnitInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=orgUnitId" })
  orgUnitId?: string;
}
