import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Namespace
/** 
 * A container for services. Namespaces allow administrators to group services together and define permissions for a collection of services.
**/
export class Namespace extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
