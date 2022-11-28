import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ElectionShapeLookupBehaviorEnum {
    ShapeLookupDefault = "shapeLookupDefault",
    ShapeLookupDisabled = "shapeLookupDisabled",
    ShapeLookupEnabled = "shapeLookupEnabled"
}


// Election
/** 
 * Information about the election that was queried.
**/
export class Election extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=electionDay" })
  electionDay?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ocdDivisionId" })
  ocdDivisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=shapeLookupBehavior" })
  shapeLookupBehavior?: ElectionShapeLookupBehaviorEnum;
}
