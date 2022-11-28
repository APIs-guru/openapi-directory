import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Object } from "./object";



// ComposeRequestSourceObjectsObjectPreconditions
/** 
 * Conditions that must be met for this operation to execute.
**/
export class ComposeRequestSourceObjectsObjectPreconditions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ifGenerationMatch" })
  ifGenerationMatch?: string;
}


export class ComposeRequestSourceObjects extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=generation" })
  generation?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=objectPreconditions" })
  objectPreconditions?: ComposeRequestSourceObjectsObjectPreconditions;
}


// ComposeRequest
/** 
 * A Compose request.
**/
export class ComposeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: Object;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceObjects", elemType: ComposeRequestSourceObjects })
  sourceObjects?: ComposeRequestSourceObjects[];
}
