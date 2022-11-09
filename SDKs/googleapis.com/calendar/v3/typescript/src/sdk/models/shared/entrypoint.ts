import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EntryPoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessCode" })
  accessCode?: string;

  @Metadata({ data: "json, name=entryPointFeatures" })
  entryPointFeatures?: string[];

  @Metadata({ data: "json, name=entryPointType" })
  entryPointType?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=meetingCode" })
  meetingCode?: string;

  @Metadata({ data: "json, name=passcode" })
  passcode?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=pin" })
  pin?: string;

  @Metadata({ data: "json, name=regionCode" })
  regionCode?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
