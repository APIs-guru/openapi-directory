import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudPolicysimulatorV1AccessTuple
/** 
 * Information about the principal, resource, and permission to check.
**/
export class GoogleCloudPolicysimulatorV1AccessTuple extends SpeakeasyBase {
  @Metadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;

  @Metadata({ data: "json, name=permission" })
  permission?: string;

  @Metadata({ data: "json, name=principal" })
  principal?: string;
}
