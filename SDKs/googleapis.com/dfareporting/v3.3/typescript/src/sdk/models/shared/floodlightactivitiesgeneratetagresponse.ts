import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FloodlightActivitiesGenerateTagResponse
/** 
 * Floodlight Activity GenerateTag Response
**/
export class FloodlightActivitiesGenerateTagResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=floodlightActivityTag" })
  floodlightActivityTag?: string;

  @Metadata({ data: "json, name=globalSiteTagGlobalSnippet" })
  globalSiteTagGlobalSnippet?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
