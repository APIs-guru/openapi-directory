import { SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyResourceRepositoryResourceAptRepository } from "./ospolicyresourcerepositoryresourceaptrepository";
import { OsPolicyResourceRepositoryResourceGooRepository } from "./ospolicyresourcerepositoryresourcegoorepository";
import { OsPolicyResourceRepositoryResourceYumRepository } from "./ospolicyresourcerepositoryresourceyumrepository";
import { OsPolicyResourceRepositoryResourceZypperRepository } from "./ospolicyresourcerepositoryresourcezypperrepository";
/**
 * A resource that manages a package repository.
**/
export declare class OsPolicyResourceRepositoryResource extends SpeakeasyBase {
    apt?: OsPolicyResourceRepositoryResourceAptRepository;
    goo?: OsPolicyResourceRepositoryResourceGooRepository;
    yum?: OsPolicyResourceRepositoryResourceYumRepository;
    zypper?: OsPolicyResourceRepositoryResourceZypperRepository;
}
