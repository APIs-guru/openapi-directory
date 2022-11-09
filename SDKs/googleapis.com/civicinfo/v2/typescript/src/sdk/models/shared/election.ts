import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ElectionShapeLookupBehaviorEnum {
    ShapeLookupDefault = "shapeLookupDefault"
,    ShapeLookupDisabled = "shapeLookupDisabled"
,    ShapeLookupEnabled = "shapeLookupEnabled"
}


// Election
/** 
 * Information about the election that was queried.
**/
export class Election extends SpeakeasyBase {
  @Metadata({ data: "json, name=electionDay" })
  electionDay?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ocdDivisionId" })
  ocdDivisionId?: string;

  @Metadata({ data: "json, name=shapeLookupBehavior" })
  shapeLookupBehavior?: ElectionShapeLookupBehaviorEnum;
}
