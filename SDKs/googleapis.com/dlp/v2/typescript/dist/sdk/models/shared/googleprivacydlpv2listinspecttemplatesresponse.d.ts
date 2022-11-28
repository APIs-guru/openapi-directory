import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InspectTemplate } from "./googleprivacydlpv2inspecttemplate";
/**
 * Response message for ListInspectTemplates.
**/
export declare class GooglePrivacyDlpV2ListInspectTemplatesResponse extends SpeakeasyBase {
    inspectTemplates?: GooglePrivacyDlpV2InspectTemplate[];
    nextPageToken?: string;
}
