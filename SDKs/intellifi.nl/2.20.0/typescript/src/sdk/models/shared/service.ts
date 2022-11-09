import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Service extends SpeakeasyBase {
  @Metadata({ data: "json, name=boot_count" })
  bootCount?: number;

  @Metadata({ data: "json, name=config" })
  config?: Map<string, any>;

  @Metadata({ data: "json, name=config_request" })
  configRequest?: Map<string, any>;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=restart_request" })
  restartRequest?: boolean;

  @Metadata({ data: "json, name=time_created" })
  timeCreated?: string;

  @Metadata({ data: "json, name=time_updated" })
  timeUpdated?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
