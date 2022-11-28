import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusDetails } from "./statusdetails";
import { ListMeta } from "./listmeta";



// Status
/** 
 * Status is a return value for calls that don't return other objects.
**/
export class Status extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: StatusDetails;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ListMeta;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
