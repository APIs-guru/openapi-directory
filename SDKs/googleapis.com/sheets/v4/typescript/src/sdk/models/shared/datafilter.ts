import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeveloperMetadataLookup } from "./developermetadatalookup";
import { GridRange } from "./gridrange";


// DataFilter
/** 
 * Filter that describes what data should be selected or returned from a request.
**/
export class DataFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=a1Range" })
  a1Range?: string;

  @Metadata({ data: "json, name=developerMetadataLookup" })
  developerMetadataLookup?: DeveloperMetadataLookup;

  @Metadata({ data: "json, name=gridRange" })
  gridRange?: GridRange;
}
