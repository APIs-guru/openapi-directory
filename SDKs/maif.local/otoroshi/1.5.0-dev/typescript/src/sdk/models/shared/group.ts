import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Group
/** 
 * An Otoroshi service group is just a group of service descriptor. It is useful to be able to define Api Keys for the whole group
**/
export class Group extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
