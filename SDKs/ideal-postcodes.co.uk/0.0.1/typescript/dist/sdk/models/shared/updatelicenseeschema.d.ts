import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CreateLicenseeDaily } from "./createlicenseedaily";
export declare class UpdateLicenseeSchema extends SpeakeasyBase {
    address?: string;
    daily?: CreateLicenseeDaily;
    postcode?: string;
    whitelist?: string[];
}
