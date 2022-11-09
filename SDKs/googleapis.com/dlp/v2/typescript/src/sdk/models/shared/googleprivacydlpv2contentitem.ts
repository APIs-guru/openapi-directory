import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2ByteContentItem } from "./googleprivacydlpv2bytecontentitem";
import { GooglePrivacyDlpV2Table } from "./googleprivacydlpv2table";


// GooglePrivacyDlpV2ContentItem
/** 
 * Container structure for the content to inspect.
**/
export class GooglePrivacyDlpV2ContentItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=byteItem" })
  byteItem?: GooglePrivacyDlpV2ByteContentItem;

  @Metadata({ data: "json, name=table" })
  table?: GooglePrivacyDlpV2Table;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
