import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WaterConservationLinenReuseProgramExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WaterConservationTowelReuseProgramExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WaterConservationWaterSavingShowersExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WaterConservationWaterSavingSinksExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WaterConservationWaterSavingToiletsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// WaterConservation
/** 
 * Water conservation practices implemented at the hotel.
**/
export class WaterConservation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=independentOrganizationAuditsWaterUse" })
  independentOrganizationAuditsWaterUse?: boolean;

  @SpeakeasyMetadata({ data: "json, name=independentOrganizationAuditsWaterUseException" })
  independentOrganizationAuditsWaterUseException?: WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=linenReuseProgram" })
  linenReuseProgram?: boolean;

  @SpeakeasyMetadata({ data: "json, name=linenReuseProgramException" })
  linenReuseProgramException?: WaterConservationLinenReuseProgramExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=towelReuseProgram" })
  towelReuseProgram?: boolean;

  @SpeakeasyMetadata({ data: "json, name=towelReuseProgramException" })
  towelReuseProgramException?: WaterConservationTowelReuseProgramExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=waterSavingShowers" })
  waterSavingShowers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=waterSavingShowersException" })
  waterSavingShowersException?: WaterConservationWaterSavingShowersExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=waterSavingSinks" })
  waterSavingSinks?: boolean;

  @SpeakeasyMetadata({ data: "json, name=waterSavingSinksException" })
  waterSavingSinksException?: WaterConservationWaterSavingSinksExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=waterSavingToilets" })
  waterSavingToilets?: boolean;

  @SpeakeasyMetadata({ data: "json, name=waterSavingToiletsException" })
  waterSavingToiletsException?: WaterConservationWaterSavingToiletsExceptionEnum;
}
