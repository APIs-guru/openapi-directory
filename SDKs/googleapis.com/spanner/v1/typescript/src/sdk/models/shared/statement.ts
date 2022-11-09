import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Type } from "./type";


// Statement
/** 
 * A single DML statement.
**/
export class Statement extends SpeakeasyBase {
  @Metadata({ data: "json, name=paramTypes", elemType: shared.Type })
  paramTypes?: Map<string, Type>;

  @Metadata({ data: "json, name=params" })
  params?: Map<string, any>;

  @Metadata({ data: "json, name=sql" })
  sql?: string;
}
