import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MysqlRdbms } from "./mysqlrdbms";
import { OracleRdbms } from "./oraclerdbms";



export class DiscoverConnectionProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mysqlRdbms" })
  mysqlRdbms?: MysqlRdbms;

  @SpeakeasyMetadata({ data: "json, name=oracleRdbms" })
  oracleRdbms?: OracleRdbms;
}
