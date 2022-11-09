import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceType
/** 
 * A message describing a service type that the business offers.
**/
export class ServiceType extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=serviceTypeId" })
  serviceTypeId?: string;
}
