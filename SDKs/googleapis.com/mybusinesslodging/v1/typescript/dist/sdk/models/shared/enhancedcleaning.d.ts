import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EnhancedCleaningCommercialGradeDisinfectantCleaningExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum EnhancedCleaningCommonAreasEnhancedCleaningExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum EnhancedCleaningEmployeesTrainedCleaningProceduresExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum EnhancedCleaningEmployeesTrainedThoroughHandWashingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum EnhancedCleaningEmployeesWearProtectiveEquipmentExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum EnhancedCleaningGuestRoomsEnhancedCleaningExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Enhanced cleaning measures implemented by the hotel during COVID-19.
**/
export declare class EnhancedCleaning extends SpeakeasyBase {
    commercialGradeDisinfectantCleaning?: boolean;
    commercialGradeDisinfectantCleaningException?: EnhancedCleaningCommercialGradeDisinfectantCleaningExceptionEnum;
    commonAreasEnhancedCleaning?: boolean;
    commonAreasEnhancedCleaningException?: EnhancedCleaningCommonAreasEnhancedCleaningExceptionEnum;
    employeesTrainedCleaningProcedures?: boolean;
    employeesTrainedCleaningProceduresException?: EnhancedCleaningEmployeesTrainedCleaningProceduresExceptionEnum;
    employeesTrainedThoroughHandWashing?: boolean;
    employeesTrainedThoroughHandWashingException?: EnhancedCleaningEmployeesTrainedThoroughHandWashingExceptionEnum;
    employeesWearProtectiveEquipment?: boolean;
    employeesWearProtectiveEquipmentException?: EnhancedCleaningEmployeesWearProtectiveEquipmentExceptionEnum;
    guestRoomsEnhancedCleaning?: boolean;
    guestRoomsEnhancedCleaningException?: EnhancedCleaningGuestRoomsEnhancedCleaningExceptionEnum;
}
