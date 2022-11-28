import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeveloperMetadataLookup } from "./developermetadatalookup";
import { GridRange } from "./gridrange";



// DataFilter
/** 
 * Filter that describes what data should be selected or returned from a request.
**/
export class DataFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=a1Range" })
  a1Range?: string;

  @SpeakeasyMetadata({ data: "json, name=developerMetadataLookup" })
  developerMetadataLookup?: DeveloperMetadataLookup;

  @SpeakeasyMetadata({ data: "json, name=gridRange" })
  gridRange?: GridRange;
}
