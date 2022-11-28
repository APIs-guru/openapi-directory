import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Intent } from "./googleclouddialogflowcxv3intent";


export enum GoogleCloudDialogflowCxV3MatchMatchTypeEnum {
    MatchTypeUnspecified = "MATCH_TYPE_UNSPECIFIED",
    Intent = "INTENT",
    DirectIntent = "DIRECT_INTENT",
    ParameterFilling = "PARAMETER_FILLING",
    NoMatch = "NO_MATCH",
    NoInput = "NO_INPUT",
    Event = "EVENT"
}


// GoogleCloudDialogflowCxV3Match
/** 
 * Represents one match result of MatchIntent.
**/
export class GoogleCloudDialogflowCxV3Match extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=event" })
  event?: string;

  @SpeakeasyMetadata({ data: "json, name=intent" })
  intent?: GoogleCloudDialogflowCxV3Intent;

  @SpeakeasyMetadata({ data: "json, name=matchType" })
  matchType?: GoogleCloudDialogflowCxV3MatchMatchTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=resolvedInput" })
  resolvedInput?: string;
}
