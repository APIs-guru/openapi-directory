import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceDirectoryConfig
/** 
 * ServiceDirectoryConfig represents Service Directory configuration for a SCM host connection.
**/
export class ServiceDirectoryConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=service" })
  service?: string;
}
