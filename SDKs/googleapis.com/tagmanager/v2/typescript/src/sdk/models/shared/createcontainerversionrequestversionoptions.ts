import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateContainerVersionRequestVersionOptions
/** 
 * Options for new container versions.
**/
export class CreateContainerVersionRequestVersionOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;
}
