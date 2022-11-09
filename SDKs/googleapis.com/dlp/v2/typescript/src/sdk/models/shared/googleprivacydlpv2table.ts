import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2Row } from "./googleprivacydlpv2row";


// GooglePrivacyDlpV2Table
/** 
 * Structured content to inspect. Up to 50,000 `Value`s per request allowed. See https://cloud.google.com/dlp/docs/inspecting-structured-text#inspecting_a_table to learn more.
**/
export class GooglePrivacyDlpV2Table extends SpeakeasyBase {
  @Metadata({ data: "json, name=headers", elemType: shared.GooglePrivacyDlpV2FieldId })
  headers?: GooglePrivacyDlpV2FieldId[];

  @Metadata({ data: "json, name=rows", elemType: shared.GooglePrivacyDlpV2Row })
  rows?: GooglePrivacyDlpV2Row[];
}
