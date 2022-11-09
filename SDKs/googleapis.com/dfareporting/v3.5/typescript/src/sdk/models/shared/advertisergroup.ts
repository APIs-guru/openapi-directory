import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdvertiserGroup
/** 
 * Groups advertisers together so that reports can be generated for the entire group at once.
**/
export class AdvertiserGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
