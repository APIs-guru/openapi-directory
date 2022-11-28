import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Layersummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationCount" })
  annotationCount?: number;

  @SpeakeasyMetadata({ data: "json, name=annotationTypes" })
  annotationTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=annotationsDataLink" })
  annotationsDataLink?: string;

  @SpeakeasyMetadata({ data: "json, name=annotationsLink" })
  annotationsLink?: string;

  @SpeakeasyMetadata({ data: "json, name=contentVersion" })
  contentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=dataCount" })
  dataCount?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=layerId" })
  layerId?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: string;

  @SpeakeasyMetadata({ data: "json, name=volumeAnnotationsVersion" })
  volumeAnnotationsVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=volumeId" })
  volumeId?: string;
}
