import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AnnotationsSummaryLayers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedCharacterCount" })
  allowedCharacterCount?: number;

  @SpeakeasyMetadata({ data: "json, name=layerId" })
  layerId?: string;

  @SpeakeasyMetadata({ data: "json, name=limitType" })
  limitType?: string;

  @SpeakeasyMetadata({ data: "json, name=remainingCharacterCount" })
  remainingCharacterCount?: number;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: string;
}


export class AnnotationsSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=layers", elemType: AnnotationsSummaryLayers })
  layers?: AnnotationsSummaryLayers[];
}
