import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DebugOptions } from "./debugoptions";



// RequestOptions
/** 
 * Shared request options for all RPC methods.
**/
export class RequestOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=debugOptions" })
  debugOptions?: DebugOptions;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=searchApplicationId" })
  searchApplicationId?: string;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
