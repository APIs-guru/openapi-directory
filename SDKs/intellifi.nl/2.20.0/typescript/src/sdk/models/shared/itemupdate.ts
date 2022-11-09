import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItemUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=config_request" })
  configRequest?: Map<string, any>;

  @Metadata({ data: "json, name=custom" })
  custom?: any;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=location_request" })
  locationRequest?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;
}
