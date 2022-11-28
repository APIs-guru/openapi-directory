import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CountryViewModel
/** 
 * View model for country objects
**/
export class CountryViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;
}
