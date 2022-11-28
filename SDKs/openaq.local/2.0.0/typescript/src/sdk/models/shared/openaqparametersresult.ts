import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Meta } from "./meta";
import { ParametersRow } from "./parametersrow";



export class OpenAqParametersResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Meta;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ParametersRow })
  results: ParametersRow[];
}
