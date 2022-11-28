import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TypeInfoSchemaInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=input" })
  input?: string;

  @SpeakeasyMetadata({ data: "json, name=output" })
  output?: string;
}
