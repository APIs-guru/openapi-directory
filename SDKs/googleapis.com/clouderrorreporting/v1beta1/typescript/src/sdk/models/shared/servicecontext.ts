import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceContext
/** 
 * Describes a running service that sends errors. Its version changes over time and multiple versions can run in parallel.
**/
export class ServiceContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
