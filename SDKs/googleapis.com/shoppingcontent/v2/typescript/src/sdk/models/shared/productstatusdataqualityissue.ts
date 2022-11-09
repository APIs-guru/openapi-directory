import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProductStatusDataQualityIssue extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination?: string;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=fetchStatus" })
  fetchStatus?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=valueOnLandingPage" })
  valueOnLandingPage?: string;

  @Metadata({ data: "json, name=valueProvided" })
  valueProvided?: string;
}
