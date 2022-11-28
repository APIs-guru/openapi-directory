import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";



// CustomRichMediaEvents
/** 
 * Represents a Custom Rich Media Events group.
**/
export class CustomRichMediaEvents extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filteredEventIds", elemType: DimensionValue })
  filteredEventIds?: DimensionValue[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
