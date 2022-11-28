import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudPolicysimulatorV1AccessTuple
/** 
 * Information about the principal, resource, and permission to check.
**/
export class GoogleCloudPolicysimulatorV1AccessTuple extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: string;

  @SpeakeasyMetadata({ data: "json, name=principal" })
  principal?: string;
}
