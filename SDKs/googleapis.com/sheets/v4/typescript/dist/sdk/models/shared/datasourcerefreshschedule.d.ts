import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceRefreshDailySchedule } from "./datasourcerefreshdailyschedule";
import { DataSourceRefreshMonthlySchedule } from "./datasourcerefreshmonthlyschedule";
import { Interval } from "./interval";
import { DataSourceRefreshWeeklySchedule } from "./datasourcerefreshweeklyschedule";
export declare enum DataSourceRefreshScheduleRefreshScopeEnum {
    DataSourceRefreshScopeUnspecified = "DATA_SOURCE_REFRESH_SCOPE_UNSPECIFIED",
    AllDataSources = "ALL_DATA_SOURCES"
}
/**
 * Schedule for refreshing the data source. Data sources in the spreadsheet are refreshed within a time interval. You can specify the start time by clicking the Scheduled Refresh button in the Sheets editor, but the interval is fixed at 4 hours. For example, if you specify a start time of 8am , the refresh will take place between 8am and 12pm every day.
**/
export declare class DataSourceRefreshSchedule extends SpeakeasyBase {
    dailySchedule?: DataSourceRefreshDailySchedule;
    enabled?: boolean;
    monthlySchedule?: DataSourceRefreshMonthlySchedule;
    nextRun?: Interval;
    refreshScope?: DataSourceRefreshScheduleRefreshScopeEnum;
    weeklySchedule?: DataSourceRefreshWeeklySchedule;
}
