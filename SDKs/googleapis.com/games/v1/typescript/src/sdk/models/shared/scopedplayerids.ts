import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ScopedPlayerIds
/** 
 * Scoped player identifiers.
**/
export class ScopedPlayerIds extends SpeakeasyBase {
  @Metadata({ data: "json, name=developerPlayerKey" })
  developerPlayerKey?: string;

  @Metadata({ data: "json, name=gamePlayerId" })
  gamePlayerId?: string;
}
