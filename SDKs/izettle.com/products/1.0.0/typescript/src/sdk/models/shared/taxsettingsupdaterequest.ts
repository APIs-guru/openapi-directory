import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TaxSettingsUpdateRequestTaxationModeEnum {
    Exclusive = "EXCLUSIVE"
,    Inclusive = "INCLUSIVE"
}


export class TaxSettingsUpdateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=taxationMode" })
  taxationMode: TaxSettingsUpdateRequestTaxationModeEnum;
}
