import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ServiceSettingsInputModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bookAheadUnit" })
  bookAheadUnit?: number;

  @SpeakeasyMetadata({ data: "json, name=bookAheadValue" })
  bookAheadValue?: number;

  @SpeakeasyMetadata({ data: "json, name=bookInAdvance" })
  bookInAdvance?: number;
}
