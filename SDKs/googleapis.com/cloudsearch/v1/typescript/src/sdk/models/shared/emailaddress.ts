import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EmailAddress
/** 
 * A person's email address.
**/
export class EmailAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=customType" })
  customType?: string;

  @Metadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=emailUrl" })
  emailUrl?: string;

  @Metadata({ data: "json, name=primary" })
  primary?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
