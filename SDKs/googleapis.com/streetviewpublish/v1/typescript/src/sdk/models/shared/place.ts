import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Place
/** 
 * Place metadata for an entity.
**/
export class Place extends SpeakeasyBase {
  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=placeId" })
  placeId?: string;
}
