import { SpeakeasyBase } from "../../../internal/utils";
import { MysqlRdbms } from "./mysqlrdbms";
import { OracleRdbms } from "./oraclerdbms";
export declare class DiscoverConnectionProfileResponse extends SpeakeasyBase {
    mysqlRdbms?: MysqlRdbms;
    oracleRdbms?: OracleRdbms;
}
