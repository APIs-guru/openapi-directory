import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DomainTypeEnum {
    Classification = "Classification"
,    ObjectDetection = "ObjectDetection"
}


export class Domain extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=exportable" })
  exportable?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: DomainTypeEnum;
}
