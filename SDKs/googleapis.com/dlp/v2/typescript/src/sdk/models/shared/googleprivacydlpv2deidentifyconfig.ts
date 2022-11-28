import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2ImageTransformations } from "./googleprivacydlpv2imagetransformations";
import { GooglePrivacyDlpV2InfoTypeTransformations } from "./googleprivacydlpv2infotypetransformations";
import { GooglePrivacyDlpV2RecordTransformations } from "./googleprivacydlpv2recordtransformations";
import { GooglePrivacyDlpV2TransformationErrorHandling } from "./googleprivacydlpv2transformationerrorhandling";



// GooglePrivacyDlpV2DeidentifyConfig
/** 
 * The configuration that controls how the data will change.
**/
export class GooglePrivacyDlpV2DeidentifyConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageTransformations" })
  imageTransformations?: GooglePrivacyDlpV2ImageTransformations;

  @SpeakeasyMetadata({ data: "json, name=infoTypeTransformations" })
  infoTypeTransformations?: GooglePrivacyDlpV2InfoTypeTransformations;

  @SpeakeasyMetadata({ data: "json, name=recordTransformations" })
  recordTransformations?: GooglePrivacyDlpV2RecordTransformations;

  @SpeakeasyMetadata({ data: "json, name=transformationErrorHandling" })
  transformationErrorHandling?: GooglePrivacyDlpV2TransformationErrorHandling;
}
