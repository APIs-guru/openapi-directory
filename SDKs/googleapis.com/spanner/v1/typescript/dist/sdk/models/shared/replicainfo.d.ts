import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ReplicaInfoTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    ReadWrite = "READ_WRITE",
    ReadOnly = "READ_ONLY",
    Witness = "WITNESS"
}
export declare class ReplicaInfo extends SpeakeasyBase {
    defaultLeaderLocation?: boolean;
    location?: string;
    type?: ReplicaInfoTypeEnum;
}
