import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StateViewModel
/** 
 * View model for state object
**/
export class StateViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=countryName" })
  countryName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=objectName" })
  objectName?: string;
}
