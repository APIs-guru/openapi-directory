import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProductStatusDataQualityIssue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=fetchStatus" })
  fetchStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=valueOnLandingPage" })
  valueOnLandingPage?: string;

  @SpeakeasyMetadata({ data: "json, name=valueProvided" })
  valueProvided?: string;
}
