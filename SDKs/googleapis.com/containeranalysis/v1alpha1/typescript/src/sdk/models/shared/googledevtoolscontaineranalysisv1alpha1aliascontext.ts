import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleDevtoolsContaineranalysisV1alpha1AliasContextKindEnum {
    KindUnspecified = "KIND_UNSPECIFIED"
,    Fixed = "FIXED"
,    Movable = "MOVABLE"
,    Other = "OTHER"
}


// GoogleDevtoolsContaineranalysisV1alpha1AliasContext
/** 
 * An alias to a repo revision.
**/
export class GoogleDevtoolsContaineranalysisV1alpha1AliasContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: GoogleDevtoolsContaineranalysisV1alpha1AliasContextKindEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
