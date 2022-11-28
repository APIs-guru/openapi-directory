import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SqlServerAuditConfig
/** 
 * SQL Server specific audit configuration.
**/
export class SqlServerAuditConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=retentionInterval" })
  retentionInterval?: string;

  @SpeakeasyMetadata({ data: "json, name=uploadInterval" })
  uploadInterval?: string;
}
