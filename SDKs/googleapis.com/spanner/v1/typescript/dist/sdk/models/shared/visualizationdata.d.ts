import { SpeakeasyBase } from "../../../internal/utils";
import { DiagnosticMessage } from "./diagnosticmessage";
import { Metric } from "./metric";
import { PrefixNode } from "./prefixnode";
export declare enum VisualizationDataKeyUnitEnum {
    KeyUnitUnspecified = "KEY_UNIT_UNSPECIFIED",
    Key = "KEY",
    Chunk = "CHUNK"
}
export declare class VisualizationData extends SpeakeasyBase {
    dataSourceEndToken?: string;
    dataSourceSeparatorToken?: string;
    diagnosticMessages?: DiagnosticMessage[];
    endKeyStrings?: string[];
    hasPii?: boolean;
    indexedKeys?: string[];
    keySeparator?: string;
    keyUnit?: VisualizationDataKeyUnitEnum;
    metrics?: Metric[];
    prefixNodes?: PrefixNode[];
}
