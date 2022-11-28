import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Service
/** 
 * Encapsulates a single service in Google Cloud Platform.
**/
export class Service extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=businessEntityName" })
  businessEntityName?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceId" })
  serviceId?: string;
}
