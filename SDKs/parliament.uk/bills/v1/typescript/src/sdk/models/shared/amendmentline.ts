import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AmendmentLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hangingIndentation" })
  hangingIndentation?: string;

  @SpeakeasyMetadata({ data: "json, name=imageType" })
  imageType?: string;

  @SpeakeasyMetadata({ data: "json, name=indentation" })
  indentation?: number;

  @SpeakeasyMetadata({ data: "json, name=isImage" })
  isImage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
