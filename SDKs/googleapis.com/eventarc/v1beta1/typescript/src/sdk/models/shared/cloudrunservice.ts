import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudRunService
/** 
 * Represents a Cloud Run service destination.
**/
export class CloudRunService extends SpeakeasyBase {
  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=service" })
  service?: string;
}
