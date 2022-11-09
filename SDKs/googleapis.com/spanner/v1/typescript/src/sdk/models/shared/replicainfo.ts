import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ReplicaInfoTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    ReadWrite = "READ_WRITE"
,    ReadOnly = "READ_ONLY"
,    Witness = "WITNESS"
}


export class ReplicaInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultLeaderLocation" })
  defaultLeaderLocation?: boolean;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=type" })
  type?: ReplicaInfoTypeEnum;
}
