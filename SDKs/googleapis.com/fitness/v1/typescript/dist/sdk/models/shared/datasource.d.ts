import { SpeakeasyBase } from "../../../internal/utils";
import { Application } from "./application";
import { DataType } from "./datatype";
import { Device } from "./device";
export declare enum DataSourceDataQualityStandardEnum {
    DataQualityUnknown = "dataQualityUnknown",
    DataQualityBloodPressureEsh2002 = "dataQualityBloodPressureEsh2002",
    DataQualityBloodPressureEsh2010 = "dataQualityBloodPressureEsh2010",
    DataQualityBloodPressureAami = "dataQualityBloodPressureAami",
    DataQualityBloodPressureBhsAa = "dataQualityBloodPressureBhsAA",
    DataQualityBloodPressureBhsAb = "dataQualityBloodPressureBhsAB",
    DataQualityBloodPressureBhsBa = "dataQualityBloodPressureBhsBA",
    DataQualityBloodPressureBhsBb = "dataQualityBloodPressureBhsBB",
    DataQualityBloodGlucoseIso151972003 = "dataQualityBloodGlucoseIso151972003",
    DataQualityBloodGlucoseIso151972013 = "dataQualityBloodGlucoseIso151972013"
}
export declare enum DataSourceTypeEnum {
    Raw = "raw",
    Derived = "derived"
}
/**
 * Definition of a unique source of sensor data. Data sources can expose raw data coming from hardware sensors on local or companion devices. They can also expose derived data, created by transforming or merging other data sources. Multiple data sources can exist for the same data type. Every data point inserted into or read from this service has an associated data source. The data source contains enough information to uniquely identify its data, including the hardware device and the application that collected and/or transformed the data. It also holds useful metadata, such as the hardware and application versions, and the device type. Each data source produces a unique stream of data, with a unique identifier. Not all changes to data source affect the stream identifier, so that data collected by updated versions of the same application/device can still be considered to belong to the same data stream.
**/
export declare class DataSource extends SpeakeasyBase {
    application?: Application;
    dataQualityStandard?: DataSourceDataQualityStandardEnum[];
    dataStreamId?: string;
    dataStreamName?: string;
    dataType?: DataType;
    device?: Device;
    name?: string;
    type?: DataSourceTypeEnum;
}
