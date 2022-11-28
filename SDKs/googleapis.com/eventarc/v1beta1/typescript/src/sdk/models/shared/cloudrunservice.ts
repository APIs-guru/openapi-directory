import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudRunService
/** 
 * Represents a Cloud Run service destination.
**/
export class CloudRunService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;
}
