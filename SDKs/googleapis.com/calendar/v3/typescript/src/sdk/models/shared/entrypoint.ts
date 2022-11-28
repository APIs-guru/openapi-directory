import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EntryPoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessCode" })
  accessCode?: string;

  @SpeakeasyMetadata({ data: "json, name=entryPointFeatures" })
  entryPointFeatures?: string[];

  @SpeakeasyMetadata({ data: "json, name=entryPointType" })
  entryPointType?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=meetingCode" })
  meetingCode?: string;

  @SpeakeasyMetadata({ data: "json, name=passcode" })
  passcode?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=pin" })
  pin?: string;

  @SpeakeasyMetadata({ data: "json, name=regionCode" })
  regionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
