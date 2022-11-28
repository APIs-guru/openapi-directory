import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ReplicaInfoTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    ReadWrite = "READ_WRITE",
    ReadOnly = "READ_ONLY",
    Witness = "WITNESS"
}


export class ReplicaInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultLeaderLocation" })
  defaultLeaderLocation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ReplicaInfoTypeEnum;
}
