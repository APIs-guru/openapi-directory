import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PortfolioModel extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=thresholdX" })
  thresholdX?: number;

  @SpeakeasyMetadata({ data: "json, name=thresholdY" })
  thresholdY?: number;

  @SpeakeasyMetadata({ data: "json, name=thresholdZ" })
  thresholdZ?: number;

  @SpeakeasyMetadata({ data: "json, name=xyz12" })
  xyz12?: string;

  @SpeakeasyMetadata({ data: "json, name=xyz12Value" })
  xyz12Value?: number;

  @SpeakeasyMetadata({ data: "json, name=xyz6" })
  xyz6?: string;

  @SpeakeasyMetadata({ data: "json, name=xyz6Value" })
  xyz6Value?: number;

  @SpeakeasyMetadata({ data: "json, name=xyz9" })
  xyz9?: string;

  @SpeakeasyMetadata({ data: "json, name=xyz9Value" })
  xyz9Value?: number;
}
