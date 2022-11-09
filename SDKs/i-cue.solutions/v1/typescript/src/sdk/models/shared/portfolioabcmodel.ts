import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PortfolioAbcModel extends SpeakeasyBase {
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
}
