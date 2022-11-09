import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DatabaseDumpDatabaseTypeEnum {
    DatabaseTypeUnspecified = "DATABASE_TYPE_UNSPECIFIED"
,    Mysql = "MYSQL"
}

export enum DatabaseDumpTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Mysql = "MYSQL"
,    Avro = "AVRO"
}


// DatabaseDump
/** 
 * A specification of the location of and metadata about a database dump from a relational database management system.
**/
export class DatabaseDump extends SpeakeasyBase {
  @Metadata({ data: "json, name=databaseType" })
  databaseType?: DatabaseDumpDatabaseTypeEnum;

  @Metadata({ data: "json, name=gcsUri" })
  gcsUri?: string;

  @Metadata({ data: "json, name=sourceDatabase" })
  sourceDatabase?: string;

  @Metadata({ data: "json, name=type" })
  type?: DatabaseDumpTypeEnum;
}
