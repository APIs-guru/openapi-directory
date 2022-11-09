import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DimensionValue } from "./dimensionvalue";


// CustomRichMediaEvents
/** 
 * Represents a Custom Rich Media Events group.
**/
export class CustomRichMediaEvents extends SpeakeasyBase {
  @Metadata({ data: "json, name=filteredEventIds", elemType: shared.DimensionValue })
  filteredEventIds?: DimensionValue[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
