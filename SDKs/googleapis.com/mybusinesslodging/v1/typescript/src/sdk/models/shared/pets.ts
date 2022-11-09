import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PetsCatsAllowedExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PetsDogsAllowedExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PetsPetsAllowedExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PetsPetsAllowedFreeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// Pets
/** 
 * Policies regarding guest-owned animals.
**/
export class Pets extends SpeakeasyBase {
  @Metadata({ data: "json, name=catsAllowed" })
  catsAllowed?: boolean;

  @Metadata({ data: "json, name=catsAllowedException" })
  catsAllowedException?: PetsCatsAllowedExceptionEnum;

  @Metadata({ data: "json, name=dogsAllowed" })
  dogsAllowed?: boolean;

  @Metadata({ data: "json, name=dogsAllowedException" })
  dogsAllowedException?: PetsDogsAllowedExceptionEnum;

  @Metadata({ data: "json, name=petsAllowed" })
  petsAllowed?: boolean;

  @Metadata({ data: "json, name=petsAllowedException" })
  petsAllowedException?: PetsPetsAllowedExceptionEnum;

  @Metadata({ data: "json, name=petsAllowedFree" })
  petsAllowedFree?: boolean;

  @Metadata({ data: "json, name=petsAllowedFreeException" })
  petsAllowedFreeException?: PetsPetsAllowedFreeExceptionEnum;
}
