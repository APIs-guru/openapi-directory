import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudRun
/** 
 * Represents a Cloud Run destination.
**/
export class CloudRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=service" })
  service?: string;
}
