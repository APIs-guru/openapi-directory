import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SqlActiveDirectoryConfig
/** 
 * Active Directory configuration, relevant only for Cloud SQL for SQL Server.
**/
export class SqlActiveDirectoryConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
