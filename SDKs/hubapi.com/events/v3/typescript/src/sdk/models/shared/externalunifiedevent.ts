import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExternalUnifiedEvent
/** 
 * Used to represent any event. With this format, the `objectType` and `eventType` values are stringified CRM types. Example object:
 * <br/>
 * ```
 *  {
 *       "objectType": "CONTACT",
 *       "objectId": 208451632,
 *       "eventType": "e_visited_page",
 *       "occurredAt": 1567377501421,
 *       "id": "leviathan-be3335d3-46f1-3985-988e-ff38e6e7b9d8",
 *       "properties": {
 *           "hs_url": "https://some-website.com/",
 *           "hs_title": "Home",
 *           "hs_referrer": "https://some-other-website.com/blog/why-we-love-big-data-and-you-should-too",
 *           "hs_userAgent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36",
 *           "hs_city": "lund",
 *           "hs_region": "m",
 *           "hs_country": "se",
 *           "hs_session_id" : "leviathan-be3335d3-46f1-3985-988e-ff38e6e7b9d8",
 *           "hs_session_source" : "DIRECT"
 *       }
 *   }      
 * ```
**/
export class ExternalUnifiedEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId: string;

  @SpeakeasyMetadata({ data: "json, name=objectType" })
  objectType: string;

  @SpeakeasyMetadata({ data: "json, name=occurredAt" })
  occurredAt: Date;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties: Map<string, string>;
}
