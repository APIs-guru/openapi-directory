import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices
/** 
 * Specifies how APIs are allowed to communicate within the Service Perimeter.
**/
export class GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedServices" })
  allowedServices?: string[];

  @SpeakeasyMetadata({ data: "json, name=enableRestriction" })
  enableRestriction?: boolean;
}
