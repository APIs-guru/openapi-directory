import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActivityAttemptOpenResponseFeedback } from "./activityattemptopenresponsefeedback";
import { ActivityAttemptOpenResponseFiles } from "./activityattemptopenresponsefiles";


export class ActivityAttemptOpenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityId" })
  activityId?: string;

  @Metadata({ data: "json, name=activityType" })
  activityType?: string;

  @Metadata({ data: "json, name=feedback" })
  feedback?: ActivityAttemptOpenResponseFeedback;

  @Metadata({ data: "json, name=learnerEmail" })
  learnerEmail?: string;

  @Metadata({ data: "json, name=offeringId" })
  offeringId?: string;

  @Metadata({ data: "json, name=responseText" })
  responseText?: string;

  @Metadata({ data: "json, name=uploadedFiles" })
  uploadedFiles?: ActivityAttemptOpenResponseFiles;
}
