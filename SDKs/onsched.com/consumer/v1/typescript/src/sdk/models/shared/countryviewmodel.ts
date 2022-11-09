import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CountryViewModel
/** 
 * View model for country objects
**/
export class CountryViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=objectName" })
  objectName?: string;
}
