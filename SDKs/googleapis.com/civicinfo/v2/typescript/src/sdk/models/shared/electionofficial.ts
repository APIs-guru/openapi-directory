import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ElectionOfficial
/** 
 * Information about individual election officials.
**/
export class ElectionOfficial extends SpeakeasyBase {
  @Metadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=faxNumber" })
  faxNumber?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=officePhoneNumber" })
  officePhoneNumber?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
