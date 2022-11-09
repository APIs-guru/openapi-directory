import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Layersummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationCount" })
  annotationCount?: number;

  @Metadata({ data: "json, name=annotationTypes" })
  annotationTypes?: string[];

  @Metadata({ data: "json, name=annotationsDataLink" })
  annotationsDataLink?: string;

  @Metadata({ data: "json, name=annotationsLink" })
  annotationsLink?: string;

  @Metadata({ data: "json, name=contentVersion" })
  contentVersion?: string;

  @Metadata({ data: "json, name=dataCount" })
  dataCount?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=layerId" })
  layerId?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: string;

  @Metadata({ data: "json, name=volumeAnnotationsVersion" })
  volumeAnnotationsVersion?: string;

  @Metadata({ data: "json, name=volumeId" })
  volumeId?: string;
}
