import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InspectUrlIndexRequest
/** 
 * Index inspection request.
**/
export class InspectUrlIndexRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inspectionUrl" })
  inspectionUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=siteUrl" })
  siteUrl?: string;
}
