import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EnhancedCleaningCommercialGradeDisinfectantCleaningExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum EnhancedCleaningCommonAreasEnhancedCleaningExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum EnhancedCleaningEmployeesTrainedCleaningProceduresExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum EnhancedCleaningEmployeesTrainedThoroughHandWashingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum EnhancedCleaningEmployeesWearProtectiveEquipmentExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum EnhancedCleaningGuestRoomsEnhancedCleaningExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// EnhancedCleaning
/** 
 * Enhanced cleaning measures implemented by the hotel during COVID-19.
**/
export class EnhancedCleaning extends SpeakeasyBase {
  @Metadata({ data: "json, name=commercialGradeDisinfectantCleaning" })
  commercialGradeDisinfectantCleaning?: boolean;

  @Metadata({ data: "json, name=commercialGradeDisinfectantCleaningException" })
  commercialGradeDisinfectantCleaningException?: EnhancedCleaningCommercialGradeDisinfectantCleaningExceptionEnum;

  @Metadata({ data: "json, name=commonAreasEnhancedCleaning" })
  commonAreasEnhancedCleaning?: boolean;

  @Metadata({ data: "json, name=commonAreasEnhancedCleaningException" })
  commonAreasEnhancedCleaningException?: EnhancedCleaningCommonAreasEnhancedCleaningExceptionEnum;

  @Metadata({ data: "json, name=employeesTrainedCleaningProcedures" })
  employeesTrainedCleaningProcedures?: boolean;

  @Metadata({ data: "json, name=employeesTrainedCleaningProceduresException" })
  employeesTrainedCleaningProceduresException?: EnhancedCleaningEmployeesTrainedCleaningProceduresExceptionEnum;

  @Metadata({ data: "json, name=employeesTrainedThoroughHandWashing" })
  employeesTrainedThoroughHandWashing?: boolean;

  @Metadata({ data: "json, name=employeesTrainedThoroughHandWashingException" })
  employeesTrainedThoroughHandWashingException?: EnhancedCleaningEmployeesTrainedThoroughHandWashingExceptionEnum;

  @Metadata({ data: "json, name=employeesWearProtectiveEquipment" })
  employeesWearProtectiveEquipment?: boolean;

  @Metadata({ data: "json, name=employeesWearProtectiveEquipmentException" })
  employeesWearProtectiveEquipmentException?: EnhancedCleaningEmployeesWearProtectiveEquipmentExceptionEnum;

  @Metadata({ data: "json, name=guestRoomsEnhancedCleaning" })
  guestRoomsEnhancedCleaning?: boolean;

  @Metadata({ data: "json, name=guestRoomsEnhancedCleaningException" })
  guestRoomsEnhancedCleaningException?: EnhancedCleaningGuestRoomsEnhancedCleaningExceptionEnum;
}
