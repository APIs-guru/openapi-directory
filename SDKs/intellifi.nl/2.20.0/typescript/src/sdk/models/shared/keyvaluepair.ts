import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class KeyValuePair extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kv_key" })
  kvKey?: string;

  @Metadata({ data: "json, name=kv_value" })
  kvValue?: any;

  @Metadata({ data: "json, name=time_created" })
  timeCreated?: string;

  @Metadata({ data: "json, name=time_updated" })
  timeUpdated?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
