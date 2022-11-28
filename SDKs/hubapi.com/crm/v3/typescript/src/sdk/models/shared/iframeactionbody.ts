import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum IFrameActionBodyTypeEnum {
    Iframe = "IFRAME"
}


export class IFrameActionBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=propertyNamesIncluded" })
  propertyNamesIncluded: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: IFrameActionBodyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width: number;
}
