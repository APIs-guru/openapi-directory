import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OrgUnitInfo
/** 
 * The organizational unit to search
**/
export class OrgUnitInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=orgUnitId" })
  orgUnitId?: string;
}
