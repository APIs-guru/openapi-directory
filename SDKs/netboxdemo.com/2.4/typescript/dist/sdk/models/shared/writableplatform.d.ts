import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritablePlatformLegacyRpcClientEnum {
    JuniperJunos = "juniper-junos",
    CiscoIos = "cisco-ios",
    Opengear = "opengear"
}
export declare class WritablePlatformInput extends SpeakeasyBase {
    manufacturer?: number;
    name: string;
    napalmArgs?: string;
    napalmDriver?: string;
    rpcClient?: WritablePlatformLegacyRpcClientEnum;
    slug: string;
}
