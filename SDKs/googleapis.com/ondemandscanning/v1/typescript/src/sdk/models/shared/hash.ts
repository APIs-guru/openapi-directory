import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Hash
/** 
 * Container message for hash values.
**/
export class Hash extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
