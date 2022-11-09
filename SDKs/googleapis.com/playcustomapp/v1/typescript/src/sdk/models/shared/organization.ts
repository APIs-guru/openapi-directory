import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Organization
/** 
 * Represents an organization that can access a custom app.
**/
export class Organization extends SpeakeasyBase {
  @Metadata({ data: "json, name=organizationId" })
  organizationId?: string;

  @Metadata({ data: "json, name=organizationName" })
  organizationName?: string;
}
