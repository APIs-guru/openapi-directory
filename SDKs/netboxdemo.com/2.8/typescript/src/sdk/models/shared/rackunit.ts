import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedDevice } from "./nesteddevice";

export enum RackUnitFaceLabelEnum {
    Front = "Front"
,    Rear = "Rear"
}

export enum RackUnitFaceValueEnum {
    Front = "front"
,    Rear = "rear"
}


export class RackUnitFace extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: RackUnitFaceLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: RackUnitFaceValueEnum;
}


export class RackUnit extends SpeakeasyBase {
  @Metadata({ data: "json, name=device" })
  device?: NestedDevice;

  @Metadata({ data: "json, name=face" })
  face?: RackUnitFace;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
