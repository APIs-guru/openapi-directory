import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PetsCatsAllowedExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PetsDogsAllowedExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PetsPetsAllowedExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PetsPetsAllowedFreeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// Pets
/** 
 * Policies regarding guest-owned animals.
**/
export class Pets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catsAllowed" })
  catsAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=catsAllowedException" })
  catsAllowedException?: PetsCatsAllowedExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=dogsAllowed" })
  dogsAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dogsAllowedException" })
  dogsAllowedException?: PetsDogsAllowedExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=petsAllowed" })
  petsAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=petsAllowedException" })
  petsAllowedException?: PetsPetsAllowedExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=petsAllowedFree" })
  petsAllowedFree?: boolean;

  @SpeakeasyMetadata({ data: "json, name=petsAllowedFreeException" })
  petsAllowedFreeException?: PetsPetsAllowedFreeExceptionEnum;
}
