import { SpeakeasyBase } from "../../../internal/utils";
import { Assignment } from "./assignment";
import { PackageRepository } from "./packagerepository";
import { Package } from "./package";
import { SoftwareRecipe } from "./softwarerecipe";
/**
 * An OS Config resource representing a guest configuration policy. These policies represent the desired state for VM instance guest environments including packages to install or remove, package repository configurations, and software to install.
**/
export declare class GuestPolicy extends SpeakeasyBase {
    assignment?: Assignment;
    createTime?: string;
    description?: string;
    etag?: string;
    name?: string;
    packageRepositories?: PackageRepository[];
    packages?: Package[];
    recipes?: SoftwareRecipe[];
    updateTime?: string;
}
/**
 * An OS Config resource representing a guest configuration policy. These policies represent the desired state for VM instance guest environments including packages to install or remove, package repository configurations, and software to install.
**/
export declare class GuestPolicyInput extends SpeakeasyBase {
    assignment?: Assignment;
    description?: string;
    etag?: string;
    name?: string;
    packageRepositories?: PackageRepository[];
    packages?: Package[];
    recipes?: SoftwareRecipe[];
}
