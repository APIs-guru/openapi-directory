import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GooglePrivacyDlpV2TransformationConfig
/** 
 * User specified templates and configs for how to deidentify structured, unstructures, and image files. User must provide either a unstructured deidentify template or at least one redact image config.
**/
export class GooglePrivacyDlpV2TransformationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deidentifyTemplate" })
  deidentifyTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=imageRedactTemplate" })
  imageRedactTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=structuredDeidentifyTemplate" })
  structuredDeidentifyTemplate?: string;
}
