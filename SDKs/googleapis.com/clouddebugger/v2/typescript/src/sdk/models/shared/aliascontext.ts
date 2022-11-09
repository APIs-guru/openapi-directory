import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AliasContextKindEnum {
    Any = "ANY"
,    Fixed = "FIXED"
,    Movable = "MOVABLE"
,    Other = "OTHER"
}


// AliasContext
/** 
 * An alias to a repo revision.
**/
export class AliasContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: AliasContextKindEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
