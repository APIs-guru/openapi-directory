import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DomainTypeEnum {
    Classification = "Classification",
    ObjectDetection = "ObjectDetection"
}


export class Domain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=exportable" })
  exportable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DomainTypeEnum;
}
