import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedManufacturer } from "./nestedmanufacturer";

export enum PlatformLegacyRpcClientEnum {
    JuniperJunos = "juniper-junos"
,    CiscoIos = "cisco-ios"
,    Opengear = "opengear"
}


export class Platform extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=manufacturer" })
  manufacturer?: NestedManufacturer;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=napalm_args" })
  napalmArgs?: string;

  @Metadata({ data: "json, name=napalm_driver" })
  napalmDriver?: string;

  @Metadata({ data: "json, name=rpc_client" })
  rpcClient?: PlatformLegacyRpcClientEnum;

  @Metadata({ data: "json, name=slug" })
  slug: string;
}
