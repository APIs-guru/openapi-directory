import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomList
/** 
 * Describes a custom list entity, such as a custom affinity or custom intent audience list.
**/
export class CustomList extends SpeakeasyBase {
  @Metadata({ data: "json, name=customListId" })
  customListId?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
