import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Meta } from "./meta";
import { ParametersRow } from "./parametersrow";
export declare class OpenAqParametersResult extends SpeakeasyBase {
    meta?: Meta;
    results: ParametersRow[];
}
