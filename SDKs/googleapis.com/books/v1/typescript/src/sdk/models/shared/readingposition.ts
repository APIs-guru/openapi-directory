import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReadingPosition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=epubCfiPosition" })
  epubCfiPosition?: string;

  @SpeakeasyMetadata({ data: "json, name=gbImagePosition" })
  gbImagePosition?: string;

  @SpeakeasyMetadata({ data: "json, name=gbTextPosition" })
  gbTextPosition?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=pdfPosition" })
  pdfPosition?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: string;

  @SpeakeasyMetadata({ data: "json, name=volumeId" })
  volumeId?: string;
}
