import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2ImageTransformations } from "./googleprivacydlpv2imagetransformations";
import { GooglePrivacyDlpV2InfoTypeTransformations } from "./googleprivacydlpv2infotypetransformations";
import { GooglePrivacyDlpV2RecordTransformations } from "./googleprivacydlpv2recordtransformations";
import { GooglePrivacyDlpV2TransformationErrorHandling } from "./googleprivacydlpv2transformationerrorhandling";
/**
 * The configuration that controls how the data will change.
**/
export declare class GooglePrivacyDlpV2DeidentifyConfig extends SpeakeasyBase {
    imageTransformations?: GooglePrivacyDlpV2ImageTransformations;
    infoTypeTransformations?: GooglePrivacyDlpV2InfoTypeTransformations;
    recordTransformations?: GooglePrivacyDlpV2RecordTransformations;
    transformationErrorHandling?: GooglePrivacyDlpV2TransformationErrorHandling;
}
