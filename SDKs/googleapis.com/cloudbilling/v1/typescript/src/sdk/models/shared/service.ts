import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Service
/** 
 * Encapsulates a single service in Google Cloud Platform.
**/
export class Service extends SpeakeasyBase {
  @Metadata({ data: "json, name=businessEntityName" })
  businessEntityName?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=serviceId" })
  serviceId?: string;
}
