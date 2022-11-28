import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2ByteContentItem } from "./googleprivacydlpv2bytecontentitem";
import { GooglePrivacyDlpV2Table } from "./googleprivacydlpv2table";



export class GooglePrivacyDlpV2ContentItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=byteItem" })
  byteItem?: GooglePrivacyDlpV2ByteContentItem;

  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: GooglePrivacyDlpV2Table;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
