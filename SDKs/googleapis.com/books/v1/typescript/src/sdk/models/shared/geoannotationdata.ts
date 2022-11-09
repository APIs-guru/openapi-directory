import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Geolayerdata } from "./geolayerdata";


export class GeoAnnotationdata extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationType" })
  annotationType?: string;

  @Metadata({ data: "json, name=data" })
  data?: Geolayerdata;

  @Metadata({ data: "json, name=encodedData" })
  encodedData?: string;

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

  @Metadata({ data: "json, name=volumeId" })
  volumeId?: string;
}
