import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpHeaderInfo } from "./httpheaderinfo";



export class DeviceIdentification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FriendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=Headers", elemType: HttpHeaderInfo })
  headers?: HttpHeaderInfo[];

  @SpeakeasyMetadata({ data: "json, name=Manufacturer" })
  manufacturer?: string;

  @SpeakeasyMetadata({ data: "json, name=ManufacturerUrl" })
  manufacturerUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelDescription" })
  modelDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelName" })
  modelName?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelNumber" })
  modelNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelUrl" })
  modelUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=SerialNumber" })
  serialNumber?: string;
}
