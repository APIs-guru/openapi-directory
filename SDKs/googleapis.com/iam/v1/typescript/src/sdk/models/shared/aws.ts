import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Aws
/** 
 * Represents an Amazon Web Services identity provider.
**/
export class Aws extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;
}
