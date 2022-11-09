import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InspectUrlIndexRequest
/** 
 * Index inspection request.
**/
export class InspectUrlIndexRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=inspectionUrl" })
  inspectionUrl?: string;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=siteUrl" })
  siteUrl?: string;
}
