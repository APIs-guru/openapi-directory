import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Geolayerdata } from "./geolayerdata";



export class GeoAnnotationdata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationType" })
  annotationType?: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Geolayerdata;

  @SpeakeasyMetadata({ data: "json, name=encodedData" })
  encodedData?: string;

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

  @SpeakeasyMetadata({ data: "json, name=volumeId" })
  volumeId?: string;
}
