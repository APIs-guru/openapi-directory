import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SasPortalStatus } from "./sasportalstatus";



// SasPortalOperation
/** 
 * This resource represents a long-running operation that is the result of a network API call.
**/
export class SasPortalOperation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=done" })
  done?: boolean;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: SasPortalStatus;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response?: Map<string, any>;
}
