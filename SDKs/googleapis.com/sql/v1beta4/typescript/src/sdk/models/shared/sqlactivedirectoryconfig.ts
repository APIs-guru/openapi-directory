import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SqlActiveDirectoryConfig
/** 
 * Active Directory configuration, relevant only for Cloud SQL for SQL Server.
**/
export class SqlActiveDirectoryConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
