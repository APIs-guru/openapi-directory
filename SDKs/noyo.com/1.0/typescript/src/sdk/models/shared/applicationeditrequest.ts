import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApplicationEditRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier_group_id" })
  carrierGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;
}
