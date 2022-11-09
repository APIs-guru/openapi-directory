import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldMetadata } from "./fieldmetadata";


// SipAddress
/** 
 * A person's SIP address. Session Initial Protocol addresses are used for VoIP communications to make voice or video calls over the internet.
**/
export class SipAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=formattedType" })
  formattedType?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
