import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MysqlRdbms } from "./mysqlrdbms";
import { OracleRdbms } from "./oraclerdbms";


export class DiscoverConnectionProfileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=mysqlRdbms" })
  mysqlRdbms?: MysqlRdbms;

  @Metadata({ data: "json, name=oracleRdbms" })
  oracleRdbms?: OracleRdbms;
}
