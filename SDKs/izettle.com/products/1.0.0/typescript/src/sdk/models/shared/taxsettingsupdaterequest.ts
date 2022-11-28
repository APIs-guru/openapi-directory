import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TaxSettingsUpdateRequestTaxationModeEnum {
    Exclusive = "EXCLUSIVE",
    Inclusive = "INCLUSIVE"
}


export class TaxSettingsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taxationMode" })
  taxationMode: TaxSettingsUpdateRequestTaxationModeEnum;
}
