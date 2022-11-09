import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HttpHeaderInfo } from "./httpheaderinfo";


export class DeviceIdentification extends SpeakeasyBase {
  @Metadata({ data: "json, name=FriendlyName" })
  friendlyName?: string;

  @Metadata({ data: "json, name=Headers", elemType: shared.HttpHeaderInfo })
  headers?: HttpHeaderInfo[];

  @Metadata({ data: "json, name=Manufacturer" })
  manufacturer?: string;

  @Metadata({ data: "json, name=ManufacturerUrl" })
  manufacturerUrl?: string;

  @Metadata({ data: "json, name=ModelDescription" })
  modelDescription?: string;

  @Metadata({ data: "json, name=ModelName" })
  modelName?: string;

  @Metadata({ data: "json, name=ModelNumber" })
  modelNumber?: string;

  @Metadata({ data: "json, name=ModelUrl" })
  modelUrl?: string;

  @Metadata({ data: "json, name=SerialNumber" })
  serialNumber?: string;
}
