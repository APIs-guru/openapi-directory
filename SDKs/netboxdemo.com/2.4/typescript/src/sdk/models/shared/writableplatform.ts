import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WritablePlatformLegacyRpcClientEnum {
    JuniperJunos = "juniper-junos",
    CiscoIos = "cisco-ios",
    Opengear = "opengear"
}


export class WritablePlatformInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=napalm_args" })
  napalmArgs?: string;

  @SpeakeasyMetadata({ data: "json, name=napalm_driver" })
  napalmDriver?: string;

  @SpeakeasyMetadata({ data: "json, name=rpc_client" })
  rpcClient?: WritablePlatformLegacyRpcClientEnum;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;
}
