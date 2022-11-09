import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Hash
/** 
 * Container message for hash values.
**/
export class Hash extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
