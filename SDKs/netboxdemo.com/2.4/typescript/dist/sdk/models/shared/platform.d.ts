import { SpeakeasyBase } from "../../../internal/utils";
import { NestedManufacturer } from "./nestedmanufacturer";
export declare enum PlatformLegacyRpcClientEnum {
    JuniperJunos = "juniper-junos",
    CiscoIos = "cisco-ios",
    Opengear = "opengear"
}
export declare class Platform extends SpeakeasyBase {
    id?: number;
    manufacturer?: NestedManufacturer;
    name: string;
    napalmArgs?: string;
    napalmDriver?: string;
    rpcClient?: PlatformLegacyRpcClientEnum;
    slug: string;
}
