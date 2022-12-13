import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ApplicationCreateRequestApplicationTypeEnum {
    New = "new",
    Renewal = "renewal",
    Upsell = "upsell"
}


export class ApplicationCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application_type" })
  applicationType: ApplicationCreateRequestApplicationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=carrier_group_id" })
  carrierGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=carrier_id" })
  carrierId: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;
}
