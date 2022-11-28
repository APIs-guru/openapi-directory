import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedManufacturer } from "./nestedmanufacturer";


export enum PlatformLegacyRpcClientEnum {
    JuniperJunos = "juniper-junos",
    CiscoIos = "cisco-ios",
    Opengear = "opengear"
}


export class Platform extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer?: NestedManufacturer;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=napalm_args" })
  napalmArgs?: string;

  @SpeakeasyMetadata({ data: "json, name=napalm_driver" })
  napalmDriver?: string;

  @SpeakeasyMetadata({ data: "json, name=rpc_client" })
  rpcClient?: PlatformLegacyRpcClientEnum;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;
}
