import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DebugOptions } from "./debugoptions";


// RequestOptions
/** 
 * Shared request options for all RPC methods.
**/
export class RequestOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=debugOptions" })
  debugOptions?: DebugOptions;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=searchApplicationId" })
  searchApplicationId?: string;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
