import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GooglePrivacyDlpV2TransformationConfig
/** 
 * User specified templates and configs for how to deidentify structured, unstructures, and image files. User must provide either a unstructured deidentify template or at least one redact image config.
**/
export class GooglePrivacyDlpV2TransformationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=deidentifyTemplate" })
  deidentifyTemplate?: string;

  @Metadata({ data: "json, name=imageRedactTemplate" })
  imageRedactTemplate?: string;

  @Metadata({ data: "json, name=structuredDeidentifyTemplate" })
  structuredDeidentifyTemplate?: string;
}
