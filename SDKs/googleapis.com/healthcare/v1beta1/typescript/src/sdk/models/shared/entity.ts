import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Entity
/** 
 * The candidate entities that an entity mention could link to.
**/
export class Entity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entityId" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=preferredTerm" })
  preferredTerm?: string;

  @SpeakeasyMetadata({ data: "json, name=vocabularyCodes" })
  vocabularyCodes?: string[];
}
