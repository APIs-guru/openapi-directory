import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum IFrameActionBodyTypeEnum {
    Iframe = "IFRAME"
}


export class IFrameActionBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=propertyNamesIncluded" })
  propertyNamesIncluded: string[];

  @Metadata({ data: "json, name=type" })
  type: IFrameActionBodyTypeEnum;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=width" })
  width: number;
}
