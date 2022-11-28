import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum HlRrequestGetHlrEnum {
    One = "1"
}


export class HlRrequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=getHLR" })
  getHlr: HlRrequestGetHlrEnum;

  @SpeakeasyMetadata({ data: "json, name=keyid" })
  keyid: string;

  @SpeakeasyMetadata({ data: "json, name=num" })
  num: string[];
}
