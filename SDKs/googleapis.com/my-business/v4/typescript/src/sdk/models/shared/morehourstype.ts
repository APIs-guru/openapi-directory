import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MoreHoursType
/** 
 * More hours types that a business can offers, in addition to its regular hours.
**/
export class MoreHoursType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=hoursTypeId" })
  hoursTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=localizedDisplayName" })
  localizedDisplayName?: string;
}
