import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyResourceRepositoryResourceAptRepository } from "./ospolicyresourcerepositoryresourceaptrepository";
import { OsPolicyResourceRepositoryResourceGooRepository } from "./ospolicyresourcerepositoryresourcegoorepository";
import { OsPolicyResourceRepositoryResourceYumRepository } from "./ospolicyresourcerepositoryresourceyumrepository";
import { OsPolicyResourceRepositoryResourceZypperRepository } from "./ospolicyresourcerepositoryresourcezypperrepository";



// OsPolicyResourceRepositoryResource
/** 
 * A resource that manages a package repository.
**/
export class OsPolicyResourceRepositoryResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apt" })
  apt?: OsPolicyResourceRepositoryResourceAptRepository;

  @SpeakeasyMetadata({ data: "json, name=goo" })
  goo?: OsPolicyResourceRepositoryResourceGooRepository;

  @SpeakeasyMetadata({ data: "json, name=yum" })
  yum?: OsPolicyResourceRepositoryResourceYumRepository;

  @SpeakeasyMetadata({ data: "json, name=zypper" })
  zypper?: OsPolicyResourceRepositoryResourceZypperRepository;
}
