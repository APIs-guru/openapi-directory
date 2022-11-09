import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OsPolicyResourceRepositoryResourceAptRepository } from "./ospolicyresourcerepositoryresourceaptrepository";
import { OsPolicyResourceRepositoryResourceGooRepository } from "./ospolicyresourcerepositoryresourcegoorepository";
import { OsPolicyResourceRepositoryResourceYumRepository } from "./ospolicyresourcerepositoryresourceyumrepository";
import { OsPolicyResourceRepositoryResourceZypperRepository } from "./ospolicyresourcerepositoryresourcezypperrepository";


// OsPolicyResourceRepositoryResource
/** 
 * A resource that manages a package repository.
**/
export class OsPolicyResourceRepositoryResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=apt" })
  apt?: OsPolicyResourceRepositoryResourceAptRepository;

  @Metadata({ data: "json, name=goo" })
  goo?: OsPolicyResourceRepositoryResourceGooRepository;

  @Metadata({ data: "json, name=yum" })
  yum?: OsPolicyResourceRepositoryResourceYumRepository;

  @Metadata({ data: "json, name=zypper" })
  zypper?: OsPolicyResourceRepositoryResourceZypperRepository;
}
