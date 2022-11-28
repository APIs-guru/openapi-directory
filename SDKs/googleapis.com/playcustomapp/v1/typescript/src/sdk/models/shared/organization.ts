import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Organization
/** 
 * Represents an organization that can access a custom app.
**/
export class Organization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=organizationId" })
  organizationId?: string;

  @SpeakeasyMetadata({ data: "json, name=organizationName" })
  organizationName?: string;
}
