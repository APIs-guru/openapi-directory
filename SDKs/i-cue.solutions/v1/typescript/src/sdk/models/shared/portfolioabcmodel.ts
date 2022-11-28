import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PortfolioAbcModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abc12" })
  abc12?: string;

  @SpeakeasyMetadata({ data: "json, name=abc12Value" })
  abc12Value?: number;

  @SpeakeasyMetadata({ data: "json, name=abc6" })
  abc6?: string;

  @SpeakeasyMetadata({ data: "json, name=abc6Value" })
  abc6Value?: number;

  @SpeakeasyMetadata({ data: "json, name=abc9" })
  abc9?: string;

  @SpeakeasyMetadata({ data: "json, name=abc9Value" })
  abc9Value?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=thresholdA" })
  thresholdA?: number;

  @SpeakeasyMetadata({ data: "json, name=thresholdB" })
  thresholdB?: number;

  @SpeakeasyMetadata({ data: "json, name=thresholdC" })
  thresholdC?: number;
}
