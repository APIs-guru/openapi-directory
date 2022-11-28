import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WordInfo
/** 
 * Word-specific information for recognized words.
**/
export class WordInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=speakerTag" })
  speakerTag?: number;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=word" })
  word?: string;
}
