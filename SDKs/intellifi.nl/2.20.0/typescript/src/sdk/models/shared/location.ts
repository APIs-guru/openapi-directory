import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=custom" })
  custom?: any;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @Metadata({ data: "json, name=time_created" })
  timeCreated?: string;

  @Metadata({ data: "json, name=time_updated" })
  timeUpdated?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
