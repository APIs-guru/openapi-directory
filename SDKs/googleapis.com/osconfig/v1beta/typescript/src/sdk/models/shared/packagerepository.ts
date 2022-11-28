import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AptRepository } from "./aptrepository";
import { GooRepository } from "./goorepository";
import { YumRepository } from "./yumrepository";
import { ZypperRepository } from "./zypperrepository";



// PackageRepository
/** 
 * A package repository.
**/
export class PackageRepository extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apt" })
  apt?: AptRepository;

  @SpeakeasyMetadata({ data: "json, name=goo" })
  goo?: GooRepository;

  @SpeakeasyMetadata({ data: "json, name=yum" })
  yum?: YumRepository;

  @SpeakeasyMetadata({ data: "json, name=zypper" })
  zypper?: ZypperRepository;
}
