import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Object } from "./object";


// ComposeRequestSourceObjectsObjectPreconditions
/** 
 * Conditions that must be met for this operation to execute.
**/
export class ComposeRequestSourceObjectsObjectPreconditions extends SpeakeasyBase {
  @Metadata({ data: "json, name=ifGenerationMatch" })
  ifGenerationMatch?: string;
}


export class ComposeRequestSourceObjects extends SpeakeasyBase {
  @Metadata({ data: "json, name=generation" })
  generation?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=objectPreconditions" })
  objectPreconditions?: ComposeRequestSourceObjectsObjectPreconditions;
}


// ComposeRequest
/** 
 * A Compose request.
**/
export class ComposeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination?: Object;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=sourceObjects", elemType: shared.ComposeRequestSourceObjects })
  sourceObjects?: ComposeRequestSourceObjects[];
}
