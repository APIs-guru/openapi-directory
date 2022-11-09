import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PatchesSchemaOpEnum {
    Add = "add"
,    Remove = "remove"
,    Replace = "replace"
,    Move = "move"
,    Copy = "copy"
,    Test = "test"
}


// PatchesSchema
/** 
 * A JSON patch operation
**/
export class PatchesSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=op" })
  op: PatchesSchemaOpEnum;

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
