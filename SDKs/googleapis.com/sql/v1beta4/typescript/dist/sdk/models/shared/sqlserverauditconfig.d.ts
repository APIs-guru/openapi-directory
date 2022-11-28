import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SQL Server specific audit configuration.
**/
export declare class SqlServerAuditConfig extends SpeakeasyBase {
    bucket?: string;
    kind?: string;
    retentionInterval?: string;
    uploadInterval?: string;
}
