import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateContainerVersionRequestVersionOptions
/** 
 * Options for new container versions.
**/
export class CreateContainerVersionRequestVersionOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;
}
