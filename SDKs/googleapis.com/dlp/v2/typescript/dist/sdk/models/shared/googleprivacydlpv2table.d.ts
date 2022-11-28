import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2Row } from "./googleprivacydlpv2row";
/**
 * Structured content to inspect. Up to 50,000 `Value`s per request allowed. See https://cloud.google.com/dlp/docs/inspecting-structured-text#inspecting_a_table to learn more.
**/
export declare class GooglePrivacyDlpV2Table extends SpeakeasyBase {
    headers?: GooglePrivacyDlpV2FieldId[];
    rows?: GooglePrivacyDlpV2Row[];
}
