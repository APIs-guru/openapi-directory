import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WaterConservationLinenReuseProgramExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WaterConservationTowelReuseProgramExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WaterConservationWaterSavingShowersExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WaterConservationWaterSavingSinksExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WaterConservationWaterSavingToiletsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// WaterConservation
/** 
 * Water conservation practices implemented at the hotel.
**/
export class WaterConservation extends SpeakeasyBase {
  @Metadata({ data: "json, name=independentOrganizationAuditsWaterUse" })
  independentOrganizationAuditsWaterUse?: boolean;

  @Metadata({ data: "json, name=independentOrganizationAuditsWaterUseException" })
  independentOrganizationAuditsWaterUseException?: WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnum;

  @Metadata({ data: "json, name=linenReuseProgram" })
  linenReuseProgram?: boolean;

  @Metadata({ data: "json, name=linenReuseProgramException" })
  linenReuseProgramException?: WaterConservationLinenReuseProgramExceptionEnum;

  @Metadata({ data: "json, name=towelReuseProgram" })
  towelReuseProgram?: boolean;

  @Metadata({ data: "json, name=towelReuseProgramException" })
  towelReuseProgramException?: WaterConservationTowelReuseProgramExceptionEnum;

  @Metadata({ data: "json, name=waterSavingShowers" })
  waterSavingShowers?: boolean;

  @Metadata({ data: "json, name=waterSavingShowersException" })
  waterSavingShowersException?: WaterConservationWaterSavingShowersExceptionEnum;

  @Metadata({ data: "json, name=waterSavingSinks" })
  waterSavingSinks?: boolean;

  @Metadata({ data: "json, name=waterSavingSinksException" })
  waterSavingSinksException?: WaterConservationWaterSavingSinksExceptionEnum;

  @Metadata({ data: "json, name=waterSavingToilets" })
  waterSavingToilets?: boolean;

  @Metadata({ data: "json, name=waterSavingToiletsException" })
  waterSavingToiletsException?: WaterConservationWaterSavingToiletsExceptionEnum;
}
