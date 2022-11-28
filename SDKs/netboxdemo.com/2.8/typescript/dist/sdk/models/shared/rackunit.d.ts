import { SpeakeasyBase } from "../../../internal/utils";
import { NestedDevice } from "./nesteddevice";
export declare enum RackUnitFaceLabelEnum {
    Front = "Front",
    Rear = "Rear"
}
export declare enum RackUnitFaceValueEnum {
    Front = "front",
    Rear = "rear"
}
export declare class RackUnitFace extends SpeakeasyBase {
    label: RackUnitFaceLabelEnum;
    value: RackUnitFaceValueEnum;
}
export declare class RackUnit extends SpeakeasyBase {
    device?: NestedDevice;
    face?: RackUnitFace;
    id?: number;
    name?: string;
}
