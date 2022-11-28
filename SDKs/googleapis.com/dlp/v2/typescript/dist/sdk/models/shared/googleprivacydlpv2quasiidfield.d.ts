import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
/**
 * A quasi-identifier column has a custom_tag, used to know which column in the data corresponds to which column in the statistical model.
**/
export declare class GooglePrivacyDlpV2QuasiIdField extends SpeakeasyBase {
    customTag?: string;
    field?: GooglePrivacyDlpV2FieldId;
}
