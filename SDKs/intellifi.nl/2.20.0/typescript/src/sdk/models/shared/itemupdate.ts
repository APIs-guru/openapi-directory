import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItemUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config_request" })
  configRequest?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=custom" })
  custom?: any;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=location_request" })
  locationRequest?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;
}
