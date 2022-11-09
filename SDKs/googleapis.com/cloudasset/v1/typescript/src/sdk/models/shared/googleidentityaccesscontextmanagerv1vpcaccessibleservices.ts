import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices
/** 
 * Specifies how APIs are allowed to communicate within the Service Perimeter.
**/
export class GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedServices" })
  allowedServices?: string[];

  @Metadata({ data: "json, name=enableRestriction" })
  enableRestriction?: boolean;
}
