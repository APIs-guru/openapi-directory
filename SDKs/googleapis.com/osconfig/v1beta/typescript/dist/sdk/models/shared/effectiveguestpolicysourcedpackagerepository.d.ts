import { SpeakeasyBase } from "../../../internal/utils";
import { PackageRepository } from "./packagerepository";
/**
 * A guest policy package repository including its source.
**/
export declare class EffectiveGuestPolicySourcedPackageRepository extends SpeakeasyBase {
    packageRepository?: PackageRepository;
    source?: string;
}
