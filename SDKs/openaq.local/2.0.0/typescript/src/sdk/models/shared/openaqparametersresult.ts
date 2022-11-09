import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Meta } from "./meta";
import { ParametersRow } from "./parametersrow";


export class OpenAqParametersResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: Meta;

  @Metadata({ data: "json, name=results", elemType: shared.ParametersRow })
  results: ParametersRow[];
}
