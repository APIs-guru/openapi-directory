import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceType
/** 
 * A message describing a service type that the business offers.
**/
export class ServiceType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceTypeId" })
  serviceTypeId?: string;
}
