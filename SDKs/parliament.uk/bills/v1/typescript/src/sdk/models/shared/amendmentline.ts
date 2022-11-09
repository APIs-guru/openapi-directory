import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AmendmentLine extends SpeakeasyBase {
  @Metadata({ data: "json, name=hangingIndentation" })
  hangingIndentation?: string;

  @Metadata({ data: "json, name=imageType" })
  imageType?: string;

  @Metadata({ data: "json, name=indentation" })
  indentation?: number;

  @Metadata({ data: "json, name=isImage" })
  isImage?: boolean;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
