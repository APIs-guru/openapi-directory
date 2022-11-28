import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ElectionOfficial
/** 
 * Information about individual election officials.
**/
export class ElectionOfficial extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=faxNumber" })
  faxNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=officePhoneNumber" })
  officePhoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
