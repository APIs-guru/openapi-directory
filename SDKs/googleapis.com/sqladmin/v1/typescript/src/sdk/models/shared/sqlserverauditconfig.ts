import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SqlServerAuditConfig
/** 
 * SQL Server specific audit configuration.
**/
export class SqlServerAuditConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=retentionInterval" })
  retentionInterval?: string;

  @Metadata({ data: "json, name=uploadInterval" })
  uploadInterval?: string;
}
