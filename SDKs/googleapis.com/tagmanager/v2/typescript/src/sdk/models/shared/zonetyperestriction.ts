import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ZoneTypeRestriction
/** 
 * Represents a Zone's type restrictions.
**/
export class ZoneTypeRestriction extends SpeakeasyBase {
  @Metadata({ data: "json, name=enable" })
  enable?: boolean;

  @Metadata({ data: "json, name=whitelistedTypeId" })
  whitelistedTypeId?: string[];
}
