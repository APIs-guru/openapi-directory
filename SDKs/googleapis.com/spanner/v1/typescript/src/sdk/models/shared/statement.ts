import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Type } from "./type";



// Statement
/** 
 * A single DML statement.
**/
export class Statement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=paramTypes", elemType: Type })
  paramTypes?: Map<string, Type>;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=sql" })
  sql?: string;
}
