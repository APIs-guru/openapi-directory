import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StateViewModel
/** 
 * View model for state object
**/
export class StateViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=countryName" })
  countryName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;
}
