import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContactGroupMetadata
/** 
 * The metadata about a contact group.
**/
export class ContactGroupMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
