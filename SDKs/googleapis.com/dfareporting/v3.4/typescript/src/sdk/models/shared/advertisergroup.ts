import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdvertiserGroup
/** 
 * Groups advertisers together so that reports can be generated for the entire group at once.
**/
export class AdvertiserGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
