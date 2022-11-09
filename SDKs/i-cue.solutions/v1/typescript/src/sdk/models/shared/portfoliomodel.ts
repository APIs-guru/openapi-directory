import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PortfolioModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=abc12" })
  abc12?: string;

  @Metadata({ data: "json, name=abc12Value" })
  abc12Value?: number;

  @Metadata({ data: "json, name=abc6" })
  abc6?: string;

  @Metadata({ data: "json, name=abc6Value" })
  abc6Value?: number;

  @Metadata({ data: "json, name=abc9" })
  abc9?: string;

  @Metadata({ data: "json, name=abc9Value" })
  abc9Value?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=thresholdA" })
  thresholdA?: number;

  @Metadata({ data: "json, name=thresholdB" })
  thresholdB?: number;

  @Metadata({ data: "json, name=thresholdC" })
  thresholdC?: number;

  @Metadata({ data: "json, name=thresholdX" })
  thresholdX?: number;

  @Metadata({ data: "json, name=thresholdY" })
  thresholdY?: number;

  @Metadata({ data: "json, name=thresholdZ" })
  thresholdZ?: number;

  @Metadata({ data: "json, name=xyz12" })
  xyz12?: string;

  @Metadata({ data: "json, name=xyz12Value" })
  xyz12Value?: number;

  @Metadata({ data: "json, name=xyz6" })
  xyz6?: string;

  @Metadata({ data: "json, name=xyz6Value" })
  xyz6Value?: number;

  @Metadata({ data: "json, name=xyz9" })
  xyz9?: string;

  @Metadata({ data: "json, name=xyz9Value" })
  xyz9Value?: number;
}
