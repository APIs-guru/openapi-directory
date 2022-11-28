import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AliasContextKindEnum {
    Any = "ANY",
    Fixed = "FIXED",
    Movable = "MOVABLE",
    Other = "OTHER"
}


// AliasContext
/** 
 * An alias to a repo revision.
**/
export class AliasContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: AliasContextKindEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
