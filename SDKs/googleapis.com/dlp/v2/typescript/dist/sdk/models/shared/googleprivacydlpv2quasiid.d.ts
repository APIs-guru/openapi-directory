import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
/**
 * A column with a semantic tag attached.
**/
export declare class GooglePrivacyDlpV2QuasiId extends SpeakeasyBase {
    customTag?: string;
    field?: GooglePrivacyDlpV2FieldId;
    inferred?: Map<string, any>;
    infoType?: GooglePrivacyDlpV2InfoType;
}
