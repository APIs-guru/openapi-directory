import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EnhancedCleaningCommercialGradeDisinfectantCleaningExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum EnhancedCleaningCommonAreasEnhancedCleaningExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum EnhancedCleaningEmployeesTrainedCleaningProceduresExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum EnhancedCleaningEmployeesTrainedThoroughHandWashingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum EnhancedCleaningEmployeesWearProtectiveEquipmentExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum EnhancedCleaningGuestRoomsEnhancedCleaningExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// EnhancedCleaning
/** 
 * Enhanced cleaning measures implemented by the hotel during COVID-19.
**/
export class EnhancedCleaning extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commercialGradeDisinfectantCleaning" })
  commercialGradeDisinfectantCleaning?: boolean;

  @SpeakeasyMetadata({ data: "json, name=commercialGradeDisinfectantCleaningException" })
  commercialGradeDisinfectantCleaningException?: EnhancedCleaningCommercialGradeDisinfectantCleaningExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=commonAreasEnhancedCleaning" })
  commonAreasEnhancedCleaning?: boolean;

  @SpeakeasyMetadata({ data: "json, name=commonAreasEnhancedCleaningException" })
  commonAreasEnhancedCleaningException?: EnhancedCleaningCommonAreasEnhancedCleaningExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=employeesTrainedCleaningProcedures" })
  employeesTrainedCleaningProcedures?: boolean;

  @SpeakeasyMetadata({ data: "json, name=employeesTrainedCleaningProceduresException" })
  employeesTrainedCleaningProceduresException?: EnhancedCleaningEmployeesTrainedCleaningProceduresExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=employeesTrainedThoroughHandWashing" })
  employeesTrainedThoroughHandWashing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=employeesTrainedThoroughHandWashingException" })
  employeesTrainedThoroughHandWashingException?: EnhancedCleaningEmployeesTrainedThoroughHandWashingExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=employeesWearProtectiveEquipment" })
  employeesWearProtectiveEquipment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=employeesWearProtectiveEquipmentException" })
  employeesWearProtectiveEquipmentException?: EnhancedCleaningEmployeesWearProtectiveEquipmentExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=guestRoomsEnhancedCleaning" })
  guestRoomsEnhancedCleaning?: boolean;

  @SpeakeasyMetadata({ data: "json, name=guestRoomsEnhancedCleaningException" })
  guestRoomsEnhancedCleaningException?: EnhancedCleaningGuestRoomsEnhancedCleaningExceptionEnum;
}
