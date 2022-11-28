import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActivityAttemptOpenResponseFeedback } from "./activityattemptopenresponsefeedback";
import { ActivityAttemptOpenResponseFiles } from "./activityattemptopenresponsefiles";



export class ActivityAttemptOpenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activityId" })
  activityId?: string;

  @SpeakeasyMetadata({ data: "json, name=activityType" })
  activityType?: string;

  @SpeakeasyMetadata({ data: "json, name=feedback" })
  feedback?: ActivityAttemptOpenResponseFeedback;

  @SpeakeasyMetadata({ data: "json, name=learnerEmail" })
  learnerEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=offeringId" })
  offeringId?: string;

  @SpeakeasyMetadata({ data: "json, name=responseText" })
  responseText?: string;

  @SpeakeasyMetadata({ data: "json, name=uploadedFiles" })
  uploadedFiles?: ActivityAttemptOpenResponseFiles;
}
