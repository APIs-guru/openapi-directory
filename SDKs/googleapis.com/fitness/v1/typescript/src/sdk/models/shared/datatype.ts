import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataTypeField } from "./datatypefield";



export class DataType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field", elemType: DataTypeField })
  field?: DataTypeField[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
