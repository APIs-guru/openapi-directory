import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PackageRepository } from "./packagerepository";



// EffectiveGuestPolicySourcedPackageRepository
/** 
 * A guest policy package repository including its source.
**/
export class EffectiveGuestPolicySourcedPackageRepository extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=packageRepository" })
  packageRepository?: PackageRepository;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;
}
