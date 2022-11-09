import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WordInfo
/** 
 * Word-specific information for recognized words.
**/
export class WordInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=speakerTag" })
  speakerTag?: number;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=word" })
  word?: string;
}
