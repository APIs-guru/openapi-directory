import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MoreHoursType
/** 
 * More hours types that a business can offers, in addition to its regular hours.
**/
export class MoreHoursType extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=hoursTypeId" })
  hoursTypeId?: string;

  @Metadata({ data: "json, name=localizedDisplayName" })
  localizedDisplayName?: string;
}
