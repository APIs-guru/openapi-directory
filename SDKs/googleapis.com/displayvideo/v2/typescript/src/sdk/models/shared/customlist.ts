import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomList
/** 
 * Describes a custom list entity, such as a custom affinity or custom intent audience list.
**/
export class CustomList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customListId" })
  customListId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
