import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AptRepository } from "./aptrepository";
import { GooRepository } from "./goorepository";
import { YumRepository } from "./yumrepository";
import { ZypperRepository } from "./zypperrepository";


// PackageRepository
/** 
 * A package repository.
**/
export class PackageRepository extends SpeakeasyBase {
  @Metadata({ data: "json, name=apt" })
  apt?: AptRepository;

  @Metadata({ data: "json, name=goo" })
  goo?: GooRepository;

  @Metadata({ data: "json, name=yum" })
  yum?: YumRepository;

  @Metadata({ data: "json, name=zypper" })
  zypper?: ZypperRepository;
}
