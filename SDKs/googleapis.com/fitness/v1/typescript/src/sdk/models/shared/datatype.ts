import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataTypeField } from "./datatypefield";


export class DataType extends SpeakeasyBase {
  @Metadata({ data: "json, name=field", elemType: shared.DataTypeField })
  field?: DataTypeField[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}
