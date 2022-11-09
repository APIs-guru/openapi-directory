import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum DatabaseDumpDatabaseTypeEnum {
    DatabaseTypeUnspecified = "DATABASE_TYPE_UNSPECIFIED",
    Mysql = "MYSQL"
}
export declare enum DatabaseDumpTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Mysql = "MYSQL",
    Avro = "AVRO"
}
/**
 * A specification of the location of and metadata about a database dump from a relational database management system.
**/
export declare class DatabaseDump extends SpeakeasyBase {
    databaseType?: DatabaseDumpDatabaseTypeEnum;
    gcsUri?: string;
    sourceDatabase?: string;
    type?: DatabaseDumpTypeEnum;
}
