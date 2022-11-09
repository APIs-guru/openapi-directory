import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PresentationDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=backgroundColor" })
  backgroundColor?: string;

  @Metadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=textColor" })
  textColor?: string;
}
