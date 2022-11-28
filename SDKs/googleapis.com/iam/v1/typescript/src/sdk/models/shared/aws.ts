import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Aws
/** 
 * Represents an Amazon Web Services identity provider.
**/
export class Aws extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;
}
