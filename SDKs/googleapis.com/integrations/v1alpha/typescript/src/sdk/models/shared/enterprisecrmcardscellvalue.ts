import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseCrmCardsCellValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=booleanValue" })
  booleanValue?: boolean;

  @Metadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @Metadata({ data: "json, name=empty" })
  empty?: Map<string, any>;

  @Metadata({ data: "json, name=longValue" })
  longValue?: string;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
