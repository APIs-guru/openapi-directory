import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2DeidentifyConfig } from "./googleprivacydlpv2deidentifyconfig";



// GooglePrivacyDlpV2DeidentifyTemplate
/** 
 * DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
**/
export class GooglePrivacyDlpV2DeidentifyTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deidentifyConfig" })
  deidentifyConfig?: GooglePrivacyDlpV2DeidentifyConfig;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// GooglePrivacyDlpV2DeidentifyTemplateInput
/** 
 * DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
**/
export class GooglePrivacyDlpV2DeidentifyTemplateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deidentifyConfig" })
  deidentifyConfig?: GooglePrivacyDlpV2DeidentifyConfig;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}
