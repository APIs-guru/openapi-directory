import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TypeInfoSchemaInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=input" })
  input?: string;

  @Metadata({ data: "json, name=output" })
  output?: string;
}
