import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FreshnessOptions
/** 
 * Indicates which freshness property to use when adjusting search ranking for an item. Fresher, more recent dates indicate higher quality. Use the freshness option property that best works with your data. For fileshare documents, last modified time is most relevant. For calendar event data, the time when the event occurs is a more relevant freshness indicator. In this way, calendar events that occur closer to the time of the search query are considered higher quality and ranked accordingly.
**/
export class FreshnessOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=freshnessDuration" })
  freshnessDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=freshnessProperty" })
  freshnessProperty?: string;
}
