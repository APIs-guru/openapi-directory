import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceContext
/** 
 * Describes a running service that sends errors. Its version changes over time and multiple versions can run in parallel.
**/
export class ServiceContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceType" })
  resourceType?: string;

  @Metadata({ data: "json, name=service" })
  service?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
