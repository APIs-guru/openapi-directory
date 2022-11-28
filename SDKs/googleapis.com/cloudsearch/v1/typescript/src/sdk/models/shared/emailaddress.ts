import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EmailAddress
/** 
 * A person's email address.
**/
export class EmailAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customType" })
  customType?: string;

  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=emailUrl" })
  emailUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
