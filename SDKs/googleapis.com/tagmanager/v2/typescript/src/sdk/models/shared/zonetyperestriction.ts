import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ZoneTypeRestriction
/** 
 * Represents a Zone's type restrictions.
**/
export class ZoneTypeRestriction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=whitelistedTypeId" })
  whitelistedTypeId?: string[];
}
