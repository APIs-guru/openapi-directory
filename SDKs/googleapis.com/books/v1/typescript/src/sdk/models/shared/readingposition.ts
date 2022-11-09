import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReadingPosition extends SpeakeasyBase {
  @Metadata({ data: "json, name=epubCfiPosition" })
  epubCfiPosition?: string;

  @Metadata({ data: "json, name=gbImagePosition" })
  gbImagePosition?: string;

  @Metadata({ data: "json, name=gbTextPosition" })
  gbTextPosition?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=pdfPosition" })
  pdfPosition?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: string;

  @Metadata({ data: "json, name=volumeId" })
  volumeId?: string;
}
