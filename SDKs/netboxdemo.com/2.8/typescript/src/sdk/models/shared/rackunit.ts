import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedDevice } from "./nesteddevice";


export enum RackUnitFaceLabelEnum {
    Front = "Front",
    Rear = "Rear"
}

export enum RackUnitFaceValueEnum {
    Front = "front",
    Rear = "rear"
}


export class RackUnitFace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: RackUnitFaceLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: RackUnitFaceValueEnum;
}


export class RackUnit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=device" })
  device?: NestedDevice;

  @SpeakeasyMetadata({ data: "json, name=face" })
  face?: RackUnitFace;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
