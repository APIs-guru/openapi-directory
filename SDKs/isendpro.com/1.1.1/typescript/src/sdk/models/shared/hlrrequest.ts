import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum HlRrequestGetHlrEnum {
    One = "1"
}


export class HlRrequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=getHLR" })
  getHlr: HlRrequestGetHlrEnum;

  @Metadata({ data: "json, name=keyid" })
  keyid: string;

  @Metadata({ data: "json, name=num" })
  num: string[];
}
