import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PackageRepository } from "./packagerepository";


// EffectiveGuestPolicySourcedPackageRepository
/** 
 * A guest policy package repository including its source.
**/
export class EffectiveGuestPolicySourcedPackageRepository extends SpeakeasyBase {
  @Metadata({ data: "json, name=packageRepository" })
  packageRepository?: PackageRepository;

  @Metadata({ data: "json, name=source" })
  source?: string;
}
