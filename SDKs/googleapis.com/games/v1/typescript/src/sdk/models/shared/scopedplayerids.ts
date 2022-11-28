import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScopedPlayerIds
/** 
 * Scoped player identifiers.
**/
export class ScopedPlayerIds extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=developerPlayerKey" })
  developerPlayerKey?: string;

  @SpeakeasyMetadata({ data: "json, name=gamePlayerId" })
  gamePlayerId?: string;
}
