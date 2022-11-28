import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiDimensionFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: string;

  @SpeakeasyMetadata({ data: "json, name=expression" })
  expression?: string;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: string;
}
