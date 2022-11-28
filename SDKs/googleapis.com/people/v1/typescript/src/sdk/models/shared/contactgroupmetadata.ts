import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContactGroupMetadata
/** 
 * The metadata about a contact group.
**/
export class ContactGroupMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
