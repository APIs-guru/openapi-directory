import { SpeakeasyBase } from "../../../internal/utils";
import { CreateLicenseeDaily } from "./createlicenseedaily";
export declare class CreateLicenseeSchema extends SpeakeasyBase {
    address: string;
    daily?: CreateLicenseeDaily;
    name: string;
    postcode: string;
    whitelist?: string[];
}
