import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudRun
/** 
 * Represents a Cloud Run destination.
**/
export class CloudRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;
}
