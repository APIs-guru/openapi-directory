import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudPolicytroubleshooterV1betaAccessTuple
/** 
 * Information about the member, resource, and permission to check.
**/
export class GoogleCloudPolicytroubleshooterV1betaAccessTuple extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: string;

  @SpeakeasyMetadata({ data: "json, name=principal" })
  principal?: string;
}
