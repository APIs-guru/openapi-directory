import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DiagnosticMessage } from "./diagnosticmessage";
import { Metric } from "./metric";
import { PrefixNode } from "./prefixnode";


export enum VisualizationDataKeyUnitEnum {
    KeyUnitUnspecified = "KEY_UNIT_UNSPECIFIED",
    Key = "KEY",
    Chunk = "CHUNK"
}


export class VisualizationData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSourceEndToken" })
  dataSourceEndToken?: string;

  @SpeakeasyMetadata({ data: "json, name=dataSourceSeparatorToken" })
  dataSourceSeparatorToken?: string;

  @SpeakeasyMetadata({ data: "json, name=diagnosticMessages", elemType: DiagnosticMessage })
  diagnosticMessages?: DiagnosticMessage[];

  @SpeakeasyMetadata({ data: "json, name=endKeyStrings" })
  endKeyStrings?: string[];

  @SpeakeasyMetadata({ data: "json, name=hasPii" })
  hasPii?: boolean;

  @SpeakeasyMetadata({ data: "json, name=indexedKeys" })
  indexedKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=keySeparator" })
  keySeparator?: string;

  @SpeakeasyMetadata({ data: "json, name=keyUnit" })
  keyUnit?: VisualizationDataKeyUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: Metric })
  metrics?: Metric[];

  @SpeakeasyMetadata({ data: "json, name=prefixNodes", elemType: PrefixNode })
  prefixNodes?: PrefixNode[];
}
