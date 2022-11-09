import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AnnotationsSummaryLayers extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedCharacterCount" })
  allowedCharacterCount?: number;

  @Metadata({ data: "json, name=layerId" })
  layerId?: string;

  @Metadata({ data: "json, name=limitType" })
  limitType?: string;

  @Metadata({ data: "json, name=remainingCharacterCount" })
  remainingCharacterCount?: number;

  @Metadata({ data: "json, name=updated" })
  updated?: string;
}


export class AnnotationsSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=layers", elemType: shared.AnnotationsSummaryLayers })
  layers?: AnnotationsSummaryLayers[];
}
