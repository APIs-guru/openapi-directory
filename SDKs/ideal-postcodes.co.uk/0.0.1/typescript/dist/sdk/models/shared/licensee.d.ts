import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LicenseeDaily } from "./licenseedaily";
export declare class Licensee extends SpeakeasyBase {
    address?: string;
    createdAt?: string;
    daily?: LicenseeDaily;
    id?: string;
    key?: string;
    name?: string;
    postcode?: string;
    whitelist?: string[];
}
