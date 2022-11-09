import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PortfolioXyzModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

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
