import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Service extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boot_count" })
  bootCount?: number;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=config_request" })
  configRequest?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=restart_request" })
  restartRequest?: boolean;

  @SpeakeasyMetadata({ data: "json, name=time_created" })
  timeCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=time_updated" })
  timeUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


export class ServiceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config_request" })
  configRequest?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=restart_request" })
  restartRequest?: boolean;
}
