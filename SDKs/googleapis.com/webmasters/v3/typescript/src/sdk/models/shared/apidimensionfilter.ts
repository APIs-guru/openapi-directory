import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiDimensionFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimension" })
  dimension?: string;

  @Metadata({ data: "json, name=expression" })
  expression?: string;

  @Metadata({ data: "json, name=operator" })
  operator?: string;
}
