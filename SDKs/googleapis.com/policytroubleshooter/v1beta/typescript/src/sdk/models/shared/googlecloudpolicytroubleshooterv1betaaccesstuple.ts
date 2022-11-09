import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudPolicytroubleshooterV1betaAccessTuple
/** 
 * Information about the member, resource, and permission to check.
**/
export class GoogleCloudPolicytroubleshooterV1betaAccessTuple extends SpeakeasyBase {
  @Metadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;

  @Metadata({ data: "json, name=permission" })
  permission?: string;

  @Metadata({ data: "json, name=principal" })
  principal?: string;
}
