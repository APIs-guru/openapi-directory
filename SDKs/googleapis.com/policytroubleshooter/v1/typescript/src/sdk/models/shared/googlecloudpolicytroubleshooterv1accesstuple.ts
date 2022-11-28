import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudPolicytroubleshooterV1AccessTuple
/** 
 * Information about the principal, resource, and permission to check.
**/
export class GoogleCloudPolicytroubleshooterV1AccessTuple extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: string;

  @SpeakeasyMetadata({ data: "json, name=principal" })
  principal?: string;
}
