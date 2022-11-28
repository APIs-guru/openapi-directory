import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceDirectoryConfig
/** 
 * ServiceDirectoryConfig represents Service Directory configuration for a SCM host connection.
**/
export class ServiceDirectoryConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;
}
