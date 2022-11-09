import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DiagnosticMessage } from "./diagnosticmessage";
import { Metric } from "./metric";
import { PrefixNode } from "./prefixnode";

export enum VisualizationDataKeyUnitEnum {
    KeyUnitUnspecified = "KEY_UNIT_UNSPECIFIED"
,    Key = "KEY"
,    Chunk = "CHUNK"
}


export class VisualizationData extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSourceEndToken" })
  dataSourceEndToken?: string;

  @Metadata({ data: "json, name=dataSourceSeparatorToken" })
  dataSourceSeparatorToken?: string;

  @Metadata({ data: "json, name=diagnosticMessages", elemType: shared.DiagnosticMessage })
  diagnosticMessages?: DiagnosticMessage[];

  @Metadata({ data: "json, name=endKeyStrings" })
  endKeyStrings?: string[];

  @Metadata({ data: "json, name=hasPii" })
  hasPii?: boolean;

  @Metadata({ data: "json, name=indexedKeys" })
  indexedKeys?: string[];

  @Metadata({ data: "json, name=keySeparator" })
  keySeparator?: string;

  @Metadata({ data: "json, name=keyUnit" })
  keyUnit?: VisualizationDataKeyUnitEnum;

  @Metadata({ data: "json, name=metrics", elemType: shared.Metric })
  metrics?: Metric[];

  @Metadata({ data: "json, name=prefixNodes", elemType: shared.PrefixNode })
  prefixNodes?: PrefixNode[];
}
