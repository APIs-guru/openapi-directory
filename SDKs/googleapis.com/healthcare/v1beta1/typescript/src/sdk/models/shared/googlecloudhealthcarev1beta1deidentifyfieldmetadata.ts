import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata
/** 
 * Specifies the FHIR paths to match and how to handle the de-identification of matching fields.
**/
export class GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=characterMaskField" })
  characterMaskField?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=cleanTextField" })
  cleanTextField?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=cryptoHashField" })
  cryptoHashField?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=dateShiftField" })
  dateShiftField?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=keepField" })
  keepField?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=paths" })
  paths?: string[];

  @SpeakeasyMetadata({ data: "json, name=removeField" })
  removeField?: Map<string, any>;
}
