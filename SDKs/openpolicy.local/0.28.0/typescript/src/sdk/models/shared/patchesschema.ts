import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PatchesSchemaOpEnum {
    Add = "add",
    Remove = "remove",
    Replace = "replace",
    Move = "move",
    Copy = "copy",
    Test = "test"
}


// PatchesSchema
/** 
 * A JSON patch operation
**/
export class PatchesSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=op" })
  op: PatchesSchemaOpEnum;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
