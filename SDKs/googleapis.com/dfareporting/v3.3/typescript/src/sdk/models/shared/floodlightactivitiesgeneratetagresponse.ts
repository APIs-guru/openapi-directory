import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FloodlightActivitiesGenerateTagResponse
/** 
 * Floodlight Activity GenerateTag Response
**/
export class FloodlightActivitiesGenerateTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=floodlightActivityTag" })
  floodlightActivityTag?: string;

  @SpeakeasyMetadata({ data: "json, name=globalSiteTagGlobalSnippet" })
  globalSiteTagGlobalSnippet?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
