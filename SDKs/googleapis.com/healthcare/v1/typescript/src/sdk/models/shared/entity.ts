import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Entity
/** 
 * The candidate entities that an entity mention could link to.
**/
export class Entity extends SpeakeasyBase {
  @Metadata({ data: "json, name=entityId" })
  entityId?: string;

  @Metadata({ data: "json, name=preferredTerm" })
  preferredTerm?: string;

  @Metadata({ data: "json, name=vocabularyCodes" })
  vocabularyCodes?: string[];
}
