import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusDetails } from "./statusdetails";
import { ListMeta } from "./listmeta";


// Status
/** 
 * Status is a return value for calls that don't return other objects.
**/
export class Status extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=details" })
  details?: StatusDetails;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: ListMeta;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
