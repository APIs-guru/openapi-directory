import { SpeakeasyBase } from "../../../internal/utils";
import { AptRepository } from "./aptrepository";
import { GooRepository } from "./goorepository";
import { YumRepository } from "./yumrepository";
import { ZypperRepository } from "./zypperrepository";
/**
 * A package repository.
**/
export declare class PackageRepository extends SpeakeasyBase {
    apt?: AptRepository;
    goo?: GooRepository;
    yum?: YumRepository;
    zypper?: ZypperRepository;
}
